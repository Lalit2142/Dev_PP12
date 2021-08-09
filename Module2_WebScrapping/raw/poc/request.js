const request = require("request") ;
const cheerio = require("cheerio") ;

// console.log("Before") ;

request("https://www.npmjs.com/package/cheerio",cb) ;

function cb(error , response , html){

    if(error){
        console.log("Error") ;
    }
    else if(response.statusCode == 404){
        console.log("Page Not Found") ;
    }
    else{
        // console.log() ;
        // console.log("html : ",html) ;
        dataExtracter(html) ;
    }
//     console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', html); // Print the HTML for the Google homepage.
}

// console.log("After") ;

function dataExtracter(html){

    let searchTool = cheerio.load(html) ;

    console.log(typeof searchTool) ;

    let element = searchTool(".cd6ce1fd span") ;

    console.log(typeof element) ;
    
    let moduleName = element.text().trim() ;

    console.log("moduleName",moduleName) ;
}