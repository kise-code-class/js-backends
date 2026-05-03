//The Path module is a built-in Node.js module that provides tools for handling and transforming file paths across different operating systems.
//The Path module is a core module in Node.js, so no installation is needed.
const path=require('path')//importing path
const fs = require("fs");
//basename()==> Returns the last portion of a path
const myPath=path.basename('C:/Program/Files/nodejs/node.exe','.exe');
console.log(myPath)
//directory name and filename
//dirname
console.log(__dirname)
console.log(__filename)
//building a path
const mypath=path.join(__dirname,'index.js')
console.log(mypath)
//extension name ==.extname()
// 1. Resolve relative to current working directory
console.log(path.resolve('file.txt'));
// 2. Resolve with multiple segments
console.log(path.resolve('/users', 'docs', 'file.txt'));
// 3. Right-to-left processing
console.log(path.resolve('/first', '/second', 'third'));
// 4. Using __dirname for module-relative paths
console.log(path.resolve(__dirname, 'config', 'app.json'));


const createFileAndDir=(file,dir,data)=>{
    const filepath=path.join(__dirname,dir,file);
    try{
        if(!fs.existsSync(dir)){
            fs.mkdir(dir,{recursive:true},(err)=>{
                if(err){
                    console.log(err.message)
                }
                console.log('dir created successfully')
            })
        }
        fs.appendFile(filepath,data,'utf8',(err)=>{
            if(err){
                const errPath=path.join(filepath,err.code)
                fs.appendFile(errPath,err.message,'utf8',(err)=>{
                    if(err){
                    
                        console.log(err.message)
                    }
                    console.log('error captured')
                })
                console.log(err.message)
            }
            console.log('file created successfully')
        })

    }catch(err){
        console.log(err)
    }
}
createFileAndDir('mydata.txt','\nthis is my data')
