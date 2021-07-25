const fs = require("fs") ;
const path = require("path") ;

let input = process.argv.slice(2) ;

let helpObj = require("./commands/help") ;
let treeObj = require("./commands/tree") ;
let organizeObj = require("./commands/organize") ;
const { dir } = require("console");

let command = input[0] ;

let dirPath ;

if(input.length > 1){
    dirPath = input[1] ;
}

switch(command){

    case "help" : helpObj.helpCmd() ;
        break ;
    case "tree" : treeObj.treeCmd(dirPath) ;
        break ;
    case "organize" : organizeObj.organizeCmd(dirPath) ;
        break ;
    default : console.log(command,"command not available") ;
}