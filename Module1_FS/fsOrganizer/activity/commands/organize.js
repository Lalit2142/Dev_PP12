const fs = require("fs") ;
const path = require("path"); 

let extensions = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images : ['png','jpg','jpeg','gif'],
}


function organize(srcPath){
    console.log(`organize command executed with path ${srcPath}`) ;
    sortFolder(srcPath) ;
}

function sortFolder(srcPath){

    //1 . Get contents for srcPath 

            let contentsOfDir = getContents(srcPath) ;
    // 2 . Iterate over contents of srcPath
            
            for(let i = 0 ; i < contentsOfDir.length ; i++){
                
                let content = contentsOfDir[i] ;
                if(content == 'OrganizedFiles'){
                    continue ;
                }
                let srcFilePath = path.join(srcPath,content) ;
                let isFolder = isDirectory(srcFilePath) ;

                // 2.1  if content if Folder ==> give recursive call by path.join(srcPath,content)
                if(isFolder){
                    sortFolder(srcFilePath) ;
                }

                else{
                    // 2.2  else check extension type from extensions object and get its corresponding Type folder
                    let extension = getExtension(content) ;
                    let type = getExtensionType(extension) ;
                    

                    // 3 . Check if srcPath/OrganizedFiles exists or not
                    
                    // 3.1 if doesn't exists , create srcPath/OrganizedFiles
                    let organizedPath = path.join(srcPath,"OrganizedFiles")
                    if(!fs.existsSync(organizedPath)){
                        fs.mkdirSync(organizedPath) ;
                    }

                     // 4 . Check if srcPath/OrganizedFiles/Type exists or not
                     let typePath = path.join(organizedPath,type) ;
                    // 4.1 if doesn't exists create srcPath/OrganizedFiles/Type
                        
                        if(!fs.existsSync(typePath)){
                            fs.mkdirSync(typePath) ;
                        }
                        
                        // 4.2.1 Check srcPath/OrganizedFiles/Type/File exists or not
                        let destFilePath = path.join(typePath,content) ;
                            // 4.2.1.1 if exists directly use copyFileSync
                            if(!fs.existsSync(destFilePath)){
                                fs.writeFileSync(destFilePath,"") ;
                            }
                            
                            // 4.2.1.2 else create file at destination i.e, srcPath/OrganizedFiles/Type/NewFile , then use copyFileSync
                            fs.copyFileSync(srcFilePath,destFilePath) ;         
                }
            }
}

function getContents(dirPath){
    return fs.readdirSync(dirPath) ;
}

function isDirectory(path){
    return fs.lstatSync(path).isDirectory() ;
}

function getExtension(content){
    let strArr = content.split('.') ;
    return strArr[1] ;
}

function getExtensionType(extension){

    let type = 'others' ;
    for(let key in extensions){
        if(extensions[key].includes(extension)){
            type = key ;
            break ;
        }
    }
    return type ;
}

module.exports = {
    organizeCmd : organize ,
}