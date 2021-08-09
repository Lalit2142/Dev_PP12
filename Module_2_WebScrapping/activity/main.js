let request = require("request") ;
let cheerio = require("cheerio") ;
let fs = require("fs") ;
let scoreCardObj = require("./scoreCard") ;

let constURL = "https://www.espncricinfo.com" ;

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595" ;

request(url,cb) ;

function cb(error,response,html){

    if(error){
        console.log(error) ;
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
    let resultsATag = searchTool(".widget-items.cta-link .label.blue-text.blue-on-hover") ;
    let link = searchTool(resultsATag).attr("href") ;

    let scoreCardLink = `${constURL}${link}` ;

    request(scoreCardLink,ncb) ;
}

function ncb(error,response,html){

    if(error){
        console.log(error) ;
    }
    else if(response.statusCode == 404){
        console.log("Page Not Found") ;
    }
    else{
        scoreCardExtracter(html) ;
    }    
}

function scoreCardExtracter(html){

    let searchTool = cheerio.load(html) ;

    let matchesLinksArr = searchTool('a[data-hover="Scorecard"]') ;

    for(let i = 0 ; i < matchesLinksArr.length ; i++){
         let matchLink = searchTool(matchesLinksArr[i]).attr("href") ;
        //  console.log(`${i+1}.${matchLink}`) ;
         
          let completeMatchLink = `${constURL}${matchLink}` ;
        //  console.log(`${i+1}.${completeMatchLink}`) ;

        scoreCardObj.psm(completeMatchLink) ;
    }
}

