let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs") ;
let path = require("path") ;
const { head } = require("request");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";


let currentPath = process.cwd() ;
// console.log(currentPath) ;

function processSingleMatch(url){
    request(url, cb);
}

function cb(error, response, html) {
    if (error) {
        console.log(error);
    }
    else if (response.statusCode == 404) {
        console.log("Page Not Found");
    }
    else {
        batsmanDetails(html);
    }
}


function batsmanDetails(html) {

    let searchTool = cheerio.load(html) ;

    let bothInningsArr = searchTool(".Collapsible") ;
    let batsmanDetailsArr = bothInningsArr.find(".table.batsman tbody") ;
    let headerArr = searchTool(".Collapsible .table.batsman .thead-light tr") ;

    let header = searchTool(headerArr[0]) ;
    let headingsArr = header.find("th") ;

    let headingStr = '' ;

    for(let k = 0 ; k < headingsArr.length ; k++){
        if(k == 2 || k == 3 || k == 5 || k == 6 || k == 7)
            headingStr += searchTool(headingsArr[k]).text() + "\t" ;
    }

    let iplPath = path.join(currentPath,"IPL") ;

    for(let i = 0 ; i < bothInningsArr.length ; i++){
        let teamName = searchTool(bothInningsArr[i]).find("h5").text() ;
        let teamNameArr = teamName.split("INNINGS") ;
        teamName = teamNameArr[0] ;
        // console.log(teamName) ;

        let teamPath = path.join(iplPath,teamName) ;

        if (!fs.existsSync(iplPath)){
            fs.mkdirSync(iplPath); 
        }

        if (!fs.existsSync(teamPath)){
            fs.mkdirSync(teamPath); 
        }


        // console.log('---------------') ;

        
        let batsmanDetails = searchTool(batsmanDetailsArr[i]) ;

        let allBatsmanArr = batsmanDetails.find("tr") ;

        

        for(let j = 0 ; j < allBatsmanArr.length ; j++){
            
            let colsArr = searchTool(allBatsmanArr[j]).find("td") ;

            
            if(colsArr.length == 8){
                let batsmanString = "" ;
                let batsmanName = searchTool(colsArr[0]).text() ;
                // console.log(batsmanName) ;
                let batsmanFile = `${batsmanName}.txt` ;
                let batsmanPath = path.join(teamPath,batsmanFile) ;

                for(let k = 0 ; k < colsArr.length ; k++){
                    if(k == 2 || k == 3 || k == 5 || k == 6 || k == 7){
                        batsmanString +=  searchTool(colsArr[k]).text() + "\t" ;
                    }
                }
                if(!fs.existsSync(batsmanPath)){
                    fs.writeFileSync(batsmanPath,headingStr+"\n") ;
                }

                fs.appendFileSync(batsmanPath,batsmanString+"\n") ;
            }
            
        }
        // console.log('*******************************************************') ;
    }
}

module.exports = {
    psm : processSingleMatch 
}


// let searchTool = cheerio.load(html);
//     let teamsArr = searchTool(".name-link .name");
//     let team1 = searchTool(teamsArr[0]).text();
//     let team2 = searchTool(teamsArr[1]).text();
//     let teams = [];
//     teams.push(team1);
//     teams.push(team2);

//     let batsmanTableArr = searchTool(".table.batsman tbody");

//     for (let i = 0; i < batsmanTableArr.length; i++) {

//         console.log("Team " + (i + 1) + " is : " + teams[i]);
//         console.log("The batsmen of " + teams[i] + " who involvded in innings are :");
//         // console.log(`-------------------------------`) ;

//         let rowsArr = searchTool(batsmanTableArr[i]).find("tr");

//         // console.log(rowsArr) ;
//         // let k = 1 ;
//         for (let j = 0; j < rowsArr.length; j++) {

//             let colsArr = searchTool(rowsArr[j]).find("td");

//             if (colsArr.length == 8) {
//                 let aTag = searchTool(colsArr[0]).find("a");
//                 let name = aTag.text();
//                 console.log(`${name}`);
//             }

//         }

//         console.log(`*********************************************************`);
//     }