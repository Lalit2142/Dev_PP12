const fs = require("fs") ;

let inputArr = process.argv.slice(2) ;
// console.log(inputArr) ;
let optionsArr = [] ;
let filesArr = [] ;

for(let i = 0 ; i < inputArr.length ; i++){

    let input = inputArr[i] ;

    if(input.startsWith("-")){
        optionsArr.push(input) ;
    }
    else{
        filesArr.push(input) ;
    }
}

// console.log("options arr ",optionsArr) ;
// console.log("files arr ",filesArr) ;

if(optionsArr.length > 3){
    console.log("You can provide at max 3 options !!! . Please try again") ;
    return ;
}

if(filesArr.length == 0){
    console.log("Please provide atleast one file path") ;
    return ;
}

// no options case
if(optionsArr.length == 0){

    // single file case
    if(filesArr.length == 1){
        let filePath = filesArr[0] ;
        if(!fs.existsSync(filePath)){
            console.log("File not found !!!. Please enter the correct file path") ;
            return ;
        }
        else{
            let fileContent = fs.readFileSync(filePath,'utf-8') ;
            console.log(fileContent) ;
        }
    }

    // multiple file case
    else{

        for(let i = 0 ; i < filesArr.length ; i++){
            let filePath = filesArr[i] ;
            if(!fs.existsSync(filePath)){
                console.log("File not found !!!") ;
            }
            else{
                let fileContent = fs.readFileSync(filePath,'utf-8') ;
                console.log(fileContent) ;
                console.log('----------------------------------------------------------------------------------------') ;
            }
        }
    }
}

// options case
else{

    for(let i = 0 ; i < filesArr.length ; i++){
        let filePath = filesArr[i] ;

        let hasFile = fs.existsSync(filePath) ;
        if(!hasFile){
            console.log("Invalid file path ",filePath) ;
            return ;
        }
    }

    let isSPresent = optionsArr.includes("-s") ;

    let resultContent = "" ;
    let resultContentArr = fs.readFileSync(filesArr[0],'utf-8').split("\r\n") ;

    if(isSPresent){
        resultContent += removeBlankSpaces(resultContentArr) ;
        if(optionsArr.includes("-n") || optionsArr.includes("-b")){
            // give priority to -n
            let finalResult = addLineNumbersToAllLines(resultContent.split("\r\n")) ;
            console.log(finalResult) ;
            return ;
        }
    }

    let isNPresent = optionsArr.includes("-n") ;
    let isBPresent = optionsArr.includes("-b") ;

    if(isNPresent && isBPresent){

        let nIdx = optionsArr.indexOf("-n") ;
        let bIdx = optionsArr.indexOf("-b") ;

        if(nIdx < bIdx){
            resultContent += addLineNumbersToAllLines(resultContentArr) ;
        }
        else{
            resultContent += addLineNumbersToNonEmptyLines(resultContentArr) ;
        }

        console.log(resultContent) ;
        return ;
    }

    if(isNPresent){
        resultContent += addLineNumbersToAllLines(resultContentArr) ;
    }

    if(isBPresent){
        resultContent += addLineNumbersToNonEmptyLines(resultContentArr) ;
    }

    console.log(resultContent) ;
}

function addLineNumbersToNonEmptyLines(contentArr){

    let resultContent = "" ;

    let j = 1 ;
    for(let i = 0 ; i < contentArr.length ; i++){
        if(contentArr[i] != ''){
            resultContent += (j)+"."+contentArr[i]+"\r\n" ;
            j++ ;
        }
        else{
            resultContent += contentArr[i] + "\r\n" ;
        }
    }

    return resultContent ;
}

function addLineNumbersToAllLines(contentArr){

    let resultContent = "" ;

    for(let i = 0 ; i < contentArr.length ; i++){
        resultContent += (i+1)+"."+contentArr[i] ;
        if(i < contentArr.length-1){
            resultContent += "\r\n" ;
        }
    }

    return resultContent ;
}

function removeBlankSpaces(contentArr){

    let filesContent = [] ;
   
    for(let i = 0 ; i < contentArr.length ; i++){
        if(contentArr[i] != ''){
            filesContent.push(contentArr[i]) ;
        }
    }
    
    let resultString = filesContent.join("\r\n\r\n") ;
    
    return resultString ;
}