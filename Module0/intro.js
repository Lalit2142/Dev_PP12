console.log("Hello PP12 ") ;

let a ; 

a = 10 ;
a = 'string' ;

a = true ;
// console.log(a) ;


// loops

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i) ;
// }

function isPrime(n){

    let isPrime = true ;
    for(let i = 2 ; i <= Math.sqrt(n) ; i++){
        if(n % i == 0){
            isPrime = false ;
            break ;
        }
    }
    return isPrime ;
}

// console.log(isPrime(97)) ;

console.log(1234%10) ;