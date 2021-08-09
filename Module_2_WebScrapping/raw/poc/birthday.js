const request = require("request") ;
const cheerio = require("cheerio") ;

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

request(url,cb) ;

function cb(err,response,html){
    if(err){
        console.log(err) ;
    }
    else if(response.statusCode == 404){
        console.log("Page Not Found") ;
    }
    else{
        dataExtracter(html) ;
    }
}

let namesArr = [] ;
let agesArr = [] ;
function dataExtracter(html){

    let searchTool = cheerio.load(html) ;   
    let bowlers = searchTool(".table.bowler tbody tr") ;
    
    for(let i = 0 ; i < bowlers.length ; i++){
        let cols = searchTool(bowlers[i]).find("td") ;
        let aElement = searchTool(cols[0]).find("a") ;
        let link = searchTool(aElement).attr("href") ;
        // console.log(link) ;
        let fullLink = `https://www.espncricinfo.com${link}` ;
        // console.log(fullLink) ;

        request(fullLink,ncb) ;
    }

    
}


function ncb(error,response,html){

    if(error){
        console.log(error) ;
    }
    else if(response.statusCode == 404){
        console.log("Page Not Found") ;
    }
    else{
        getBirthday(html) ;
    }
}

function getBirthday(html){

    let searchTool = cheerio.load(html) ;

    let playerInfo = searchTool(".player-card-description.gray-900") ;

    let fullName = searchTool(playerInfo[0]).text() ;
    let age     = searchTool(playerInfo[2]).text() ;

    let normalAge = age.split("y")[0] ;
    
    console.log(fullName+" "+normalAge) ;
    

    // namesArr.push(fullName) ;
    // agesArr.push(age) ;
}

