let fs = require("fs") ;
let path = require("path") ;
let dirPath = "./dummy" ;   

let destFilePath = path.join(dirPath,"summary.txt") ;
let contents = fs.readdirSync(dirPath) ;

for(let i = 0 ; i < contents.length ; i++){
    let fullPath = path.join(dirPath,contents[i]) ;
    let isDirectory = fs.lstatSync(fullPath).isDirectory() ;

    if(isDirectory){
        continue ;
    }

    
    let fileContent = fs.readFileSync(fullPath) ;


    if(!fs.existsSync(destFilePath)){
        fs.writeFileSync(destFilePath,fileContent) ;
    }
    else{
        fs.appendFileSync(destFilePath,fileContent) ;
    }
}