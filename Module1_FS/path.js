const fs = require("fs") ;
const path = require("path") ;

let cwd = process.cwd() ;
// console.log(cwd) ;==> C:\User\Users\OneDrive\Desktop\Dev_PP12\Module1_FS

let input = process.argv.slice(2) ;

// console.log(input) ;==>['web_dev','js','browser','react']

let commonPath = path.join(cwd,input[0]) ;

// console.log(commonPath) ;C:\User\Users\OneDrive\Desktop\Dev_PP12\Module1_FS\Web_Dev

if (!fs.existsSync(commonPath)){
    fs.mkdirSync(commonPath);
}

for(let i = 1 ; i < input.length ; i++){

    let subDirPath = path.join(commonPath,input[i]) ;
    if (!fs.existsSync(subDirPath)){
        fs.mkdirSync(subDirPath);

        for(let j = 1 ; j <= 5 ; j++){
            let modulePath = path.join(subDirPath,"Module"+j) ;
            if (!fs.existsSync(modulePath)){
                fs.mkdirSync(modulePath);
            }
            let filePath = path.join(modulePath,"content.md") ;
            fs.writeFileSync(filePath,"Hello") ;
        }
    }
}



