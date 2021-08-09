const cheerio = require("cheerio");
const request = require("request");


const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

request(url, cb);

function cb(err, response, html) {

    if (err) {
        console.log(err);
    }
    else if (response.statusCode == 404) {
        console.log("Page Not Found");
    }
    else {
        dataExtracter(html);
    }
}

function dataExtracter(html) {

    let searchTool = cheerio.load(html);

    let bowlers = searchTool(".table.bowler tbody tr");

    let higestWicketTaker = '' ;
    let highestWicketsTaken = -1 ;
    let bestEconomy = 100 ;

    for (let i = 0; i < bowlers.length; i++) {
        let cols = searchTool(bowlers[i]).find("td");
        let bowlerName = searchTool(cols[0]).text();
        let wicketsTaken = searchTool(cols[4]).text();
        let economy = searchTool(cols[5]).text();

        console.log(bowlerName + " " + wicketsTaken + " " + economy);

        if(wicketsTaken > highestWicketsTaken){
            higestWicketTaker = bowlerName ;
            highestWicketsTaken = wicketsTaken ;
            bestEconomy = economy ;
        }
        else if(wicketsTaken == higestWicketTaker){
            if(economy < bestEconomy){
                higestWicketTaker = bowlerName ;
                highestWicketsTaken = wicketsTaken ;
                bestEconomy = economy ;
            }
        }
    }

    console.log("Highest Wicket Taker of the match with best economy is : ",higestWicketTaker) ;
}