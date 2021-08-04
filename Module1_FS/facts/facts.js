// let content = fs.readFileSync("f1.txt") ;

// const fs = require("fs");

// console.log(content+"") ;

// fs.writeFileSync("./abc.txt","I am a new file with name abc.txt") ;

// fs.appendFileSync("./abc.txt", "\nI am the new data appended to abc.txt") ;

// deleting files 
// fs.unlinkSync("./abc.txt") ;
// fs.unlinkSync("./f1.txt") ;
// fs.unlinkSync("./f2.txt") ;

// renaming file
// fs.renameSync("../../Dummy Folder","../../Dummy_Folder") ;

// let cmdArgs = process.argv.slice(2) ;
// // console.log(cmdArgs) ;

// let givenPath = (cmdArgs.length > 1) ? cmdArgs[1] : "../Module1_FS" ;

// // console.log(givenPath) ;

// // fs.writeFileSync("../../Dummy_Folder/abc.txt","Hey I am abc in Dummy Folder") ;

// // let content = fs.readFileSync(givenPath+"\\abc.txt") ;
// // console.log(content+"") ;

// let dirContent = fs.readdirSync(givenPath) ;
// console.log(dirContent) ;

// fs.mkdirSync("./dir1") ;
// fs.mkdirSync("./dir1") ;==> will give error becoz dir already exists

// fs.rmdirSync("./dir1") ;

// let arr = ['txt','exe','png'] ;

// let content = 'abc.txt' ;

// let strArr = content.split(".") ;
// console.log(strArr) ;

// let arr = [1,2,3,4,5] ;

// let narr = arr.splice(1,3) ;

// console.log(arr) ;
// console.log(narr) ;

var varName = 1 ;

function a(){
    console.log(varName) ;
}

function b(){
    console.log(varName) ;
    var varName = 2 ;
    console.log(varName) ;
    a() ;
}

b() ;