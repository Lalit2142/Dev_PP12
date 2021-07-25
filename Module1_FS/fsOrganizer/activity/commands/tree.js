let fs = require("fs") ;
let path = require("path") ;

function tree(src){
    console.log(`tree command executed with path ${src}`) ;
    displayTree(src) ;
}

function displayTree(dirPath){

    let dirContents = fs.readdirSync(dirPath) ;
    for(let i = 0 ; i < dirContents.length ; i++){
        let dirContent = dirContents[i] ;

        console.log(dirContent) ;
    }
}

module.exports = {
    treeCmd : tree ,
}