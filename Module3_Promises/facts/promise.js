let fs = require("fs") ;

console.log("before") ;

let fileReafPromise = fs.promises.readFile("f1.txt") ;

console.log(fileReafPromise) ;

fileReafPromise.then(function(data){
    console.log(data+"") ;
}) ;

fileReafPromise.catch(function(err){
    console.log(err) ;
})

console.log("After") ;