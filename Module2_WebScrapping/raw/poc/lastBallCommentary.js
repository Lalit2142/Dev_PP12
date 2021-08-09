const request = require("request") ;
const cheerio = require("cheerio") ;

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary" ;

request(url,cb) ;

function cb(error , response , html){

    if(error){
        console.log("Error") ;
    }
    else if(response.statusCode == 404){
        console.log("Page Not Found") ;
    }
    else{
        dataExtracter(html) ;
    }
}



function dataExtracter(html){

    let searchTool = cheerio.load(html) ;

    let elementRepArr = searchTool(".match-comment-wrapper .match-comment-long-text") ;

    let lbc = searchTool(elementRepArr[0]).text() ;

    console.log("lbc is : ",lbc) ;
}