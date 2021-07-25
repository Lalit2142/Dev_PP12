const fs = require("fs") ;
const path = require("path") ;

let input = process.argv.slice(2) ;

let helpObj = require("./commands/help") ;
let treeObj = require("./commands/tree") ;
let organizeObj = require("./commands/organize") ;
let command = input[0] ;

let dirPath ;
if(input.length > 1){
    dirPath = input[1] ;
}
if(command == 'help'){
    helpObj.helpCmd() ;
}
else if(command == 'tree'){
    treeObj.treeCmd()
}
else if(command == 'organize'){
    organizeObj.organizeCmd() ;
}
else{
    console.log(command,"command not availble") ;
}
