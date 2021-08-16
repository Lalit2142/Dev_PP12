const fs = require("fs") ;

let filesArr = ["./f1.txt","./f2.txt","./f3.txt","./f4.txt","./f5.txt"] ;
let i = 0 ;


readSeriallyUsingAsync(filesArr) ;


function readSeriallyUsingAsync(filesArr){

    if(i == filesArr.length){
        return ;
    }

    fs.readFile(filesArr[i],'utf8',cb); 
}

function cb(err,data){
    console.log(data) ;
    i++ ;
    readSeriallyUsingAsync(filesArr) ;
}