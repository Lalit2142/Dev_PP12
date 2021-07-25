let cap = {
    firstName : "Steve",
    lastName : "Rogers",
    friends  : ["Tony","Bruce","Thor"],
    sayHi : function(){
        console.log("cap says hi") ;
    },
    address : {
        state : "New York",
        city : "Brooklyn",
    },
}

// console.log(cap) ;

// console.log(cap.firstName) ;

// for in loop to iterate over keys of object

// for(let key in cap){
//     console.log(key , " : " , cap[key]) ;
// }

// console.log(cap.address.city) ;

let x = "address" ;
// console.log(cap[x]) ;

cap.isMarried = false ;
console.log(cap) ;

delete cap[x] ;
console.log(cap) ;

cap.address = {
    state : "New York",
    city : "Brooklyn",
    street : "4/H-A"
}

console.log(cap) ;
