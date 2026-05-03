const fs=require('fs')
const path=require('path')

//working directory
const myDirectory=path.dirname('C:/users/javascript/file.js')
console.log(myDirectory)
//extension name
const extension=path.extname(`/users/javascript/file.txt`)
console.log(`extension name:${extension}`)
//base name
const baseName=path.basename('C:/users/javascript/file.js')//returns the last portion of the path.
//often used to extract the file name from a fully qualified path.
console.log(`base name:${baseName}`)

//parse
const pathParse=path.parse('C:/users/javascript/file.js')
console.log(pathParse)
//path format
const pathFormat=path.format(
    {
        root:'/',
        dir:"C:/users/data",
        base:'errors.txt',
        ext:'.txt',
        name:'/errors'
    }
)
console.log(pathFormat)
//join paths
const joinPath=path.join(__dirname,'data','logs');
console.log(joinPath)

//reading a file
// fs.readFile()
//writing a file
const WriteToFile=(dir,file,data)=>{
    const filepath=path.join(__dirname,dir,file);//path defination
    if(!fs.existsSync(dir)){//check if directory exists, if not create the directory
        fs.mkdir(dir,(err)=>{//creates the directory
            if(err){
            console.log(err.message)
            }
            console.log('created successfully')

        }
        
    )
    }
    //performing a write operation
    fs.writeFile(filepath,data,'utf8',(err)=>{
        if(err){
            console.log(err.message)
        }
        console.log('file was created successfully')
    })
}
//calling our writeToFile function
WriteToFile('DATAFOLDER','data.txt','this is my data')


//appending a file