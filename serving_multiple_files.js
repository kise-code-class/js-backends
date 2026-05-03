const http=require('http')
const path = require('path')
const fs=require('fs')
// server creation
const port=8080
const filePath=path.join(__dirname,'views')


const server=http.createServer(
    (request,response)=>{
        response.statusCode=200
        response.setHeader('content-type','text/html');
        fs.readdir(filePath,(err,files)=>{
            if(err){
                console.log(err.message)
            }
            let served=false
            for(var x=0;x<files.length;x++){
                if(files[x]==='index.html' && request.url==='/home'){
                    fs.readFile(path.join(filePath,'index.html'),(err,data)=>{
                        if(err){
                            console.log(err.message)
                        }
                        response.end(data)
                    })
                    served=true
                }
                else if(files[x]==='about.html' && request.url==='/about'){
                    fs.readFile(path.join(filePath,'about.html'),(err,data)=>{
                        if(err){
                            console.log(err.message)
                        }
                        response.end(data)
                    })
                    served=true
                }
                else if(files[x]==='news.html' && request.url==='/news'){
                    fs.readFile(path.join(filePath,'news.html'),(err,data)=>{
                        if(err){
                            console.log(err.message)
                        }
                        response.end(data)
                    })
                   
                }
               
            }
        });
    });
    server.listen(port,()=>{
        console.log(`server running on:http://127.0.0.1:${port}`)
    })


    // server2
    const server2=http.createServer((req,res)=>{
        res.setHeader('content-type','text/html');

        if(req.url==='/index'){
            res.end('<h2>index page</h2>')
        }
        else if(req.url==='/users'){
            res.end('<h2>users page</h2>')
        }
        else if(req.url==='/contacts'){
            res.end('<h2>contacts page</h2>')
        }else{
            res.statusCode=404;
            res.end('page not found')
        }
    }
    )
    server2.listen(8000,()=>{
        console.log(`server2 running on:http://127.0.0.1:${8000}`)
    })
        
 