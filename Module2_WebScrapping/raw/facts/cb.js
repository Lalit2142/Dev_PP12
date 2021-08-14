
function sqr(x){
    return x * x ;
}

function cuber(a){

    return a * a * a ;
}

let arr = [1,2,3,4,5] ;

function biggerFunction(arr , cb){

    let resArr = [] ;
    for(let i = 0 ; i < arr.length ; i++){
        resArr.push(cb(arr[i])) ;
    }

    return resArr ;
}


let sqrArr = biggerFunction(arr,sqr) ;

let cubeArr = biggerFunction(arr,cuber) ;

console.log("sqrArr is " , sqrArr) ;
console.log("cubeArr is " , cubeArr) ;