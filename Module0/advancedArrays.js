let arr = [1.1, true , "string" , null , [1,2,3,4,5] , function fn(){
    console.log("I am a function inside an array") ;
    return "rval from fn" ;
}] ;


// console.log(arr[arr.length-1]) ;

// console.log(arr[arr.length-1]()) ;

// let rval = arr[arr.length-1]() ;
// console.log(rval) ;

function fn(){
    console.log("I am a function") ;
}

console.log(fn()) ;