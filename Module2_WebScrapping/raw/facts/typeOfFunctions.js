
// 1st type=> function statement 

function f1(){
    console.log("Hey I am a function statement") ;
}

f1() ;

// 2nd type == > function expression

let f2 = function(){
    console.log("Hey I am a function expression") ;
}

f2() ;

// 3rd type ==> Immediately Invoke Function Expression (IIFE)

(function f3(){
    console.log("Hey I am a IIFE") ;
})() ;


// 4th type ==> arrow function (heavily used in React JS)

let f4 = ()=>{
    console.log("Hey I am a arrow function") ;
}

f4() ;

let batsmanName = "Suresh Raina" ;

let filePth = `${batsmanName}.txt` ;

console.log(filePth) ;