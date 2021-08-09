let request = require("request");
let cheerio = require("cheerio");


// let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";


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

    let searchTool = cheerio.load(html);
    let teamsArr = searchTool(".name-link .name");
    let team1 = searchTool(teamsArr[0]).text();
    let team2 = searchTool(teamsArr[1]).text();
    let teams = [];
    teams.push(team1);
    teams.push(team2);

    let batsmanTableArr = searchTool(".table.batsman tbody");

    for (let i = 0; i < batsmanTableArr.length; i++) {

        console.log("Team " + (i + 1) + " is : " + teams[i]);
        console.log("The batsmen of " + teams[i] + " who involvded in innings are :");
        // console.log(`-------------------------------`) ;

        let rowsArr = searchTool(batsmanTableArr[i]).find("tr");

        // console.log(rowsArr) ;
        // let k = 1 ;
        for (let j = 0; j < rowsArr.length; j++) {

            let colsArr = searchTool(rowsArr[j]).find("td");

            if (colsArr.length == 8) {
                let aTag = searchTool(colsArr[0]).find("a");
                let name = aTag.text();
                console.log(`${name}`);
            }

        }

        console.log(`*********************************************************`);
    }
}

module.exports = {
    psm : processSingleMatch 
}