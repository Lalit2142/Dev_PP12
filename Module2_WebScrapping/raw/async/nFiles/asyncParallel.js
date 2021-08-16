const fs = require("fs") ;

let filesArr = process.argv.slice(2) ;
// console.log(filesArr) ;

console.log("Before") ;

for(let i = 0 ; i < filesArr.length ; i++){

    fs.readFile(filesArr[i],cb)
}

function cb(err,data){
    console.log(data+"") ;
}

console.log("After") ;