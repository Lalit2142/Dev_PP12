const fs = require("fs") ;
const path = require("path"); 

let extensions = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function organize(src){

    console.log(`organize command executed with path ${src}`) ;
    let destFolderPath = path.join(src,"OrganizedFiles") ; // ==> Random/Organized_Files
    if(!fs.existsSync(destFolderPath))
        fs.mkdirSync(destFolderPath) ;
    sortFoler(src,destFolderPath) ;

}

function sortFoler(dirPath,destFolderPath){

    let dirContents = fs.readdirSync(dirPath) ;

    for(let i = 0 ; i < dirContents.length ; i++){
        let dirContent = dirContents[i] ;

        let contentsPath = path.join(dirPath,dirContent) ;

        if(fs.lstatSync(contentsPath).isDirectory()){
            continue ;
        }

        let filePath = contentsPath ;

        let extension = path.extname(filePath) ;
        let type = '' ;
        for(let key in extensions){
            if(extensions[key].includes(extension.slice(1))){
                type = key ;
                break ;
            }
        }
        if(type == ''){
            type = 'others' ;
        }

       
        let finalPath = path.join(destFolderPath,type) ;
        if(!fs.existsSync(finalPath)){
            fs.mkdirSync(finalPath) ;
        }
        let src =  filePath ;                                                   // Downloads/Misc/def.png
        let dest = path.join(finalPath,path.basename(filePath));               // Downloads/Misc/Images/def.png
        fs.copyFileSync(src,dest) ;   
    }
}

module.exports = {
    organizeCmd : organize ,
}