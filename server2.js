//import http module
const http=require('http');
const port=8080;//port number
const fs=require('fs');
const path=require('path')

//create server
// function reqf(req,res){}
const filepath=path.join(__dirname,'views')
console.log(filepath)


const server=http.createServer((request,response)=>{
    let filename;
    if(request.url==='/index'){//if the requested url==>/index,index.html will be served
        response.statusCode=200;
        filename='index.html'
         console.log(path.join(filepath,filename))
    }else if(request.url==='/about'){//if the requested url==>/about,about.html will be served
        response.statusCode=200;
        filename='about.html'
         console.log(path.join(filepath,filename))
    }else if(request.url==='/news'){////if the requested url==>/news,news.html will be served
        response.statusCode=200;
        filename='news.html'
        console.log(path.join(filepath,filename))
    }if(request.url==='/create'){
        response.statusCode=201;
        filename='create.html'

    }
    
    else{
        response.statusCode=404;
        response.end('page not found')
        return 
    }
    //reading files
    const file=path.join(filepath,filename)
    
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err.message)
        }else{
            // response.writeHead(200,{
            //     'content-type':'text/html'
            // })
            response.statusCode=200;
            response.setHeader('content-type','text/html')
            response.end(data)
        }
    })
    fs.writeFile(file,'<h1>created a file</h1>',(err)=>{
        if(err){
            console.log(err.message)
        }
        response.end('file created successfully')
    })


    // if(request.url==='/register'){
    //     response.writeHead(200,{
    //         'content-type':'text/html',
    //       'origin':`http://localhost:${port}${request.url}`,//http://localhost:8080/register
    //         'connection':'keep-alive'
    //           })//setting multiple headers
    //     response.end('<p>serving multiple headers</p>')     
    // }

})
//listening to the server
server.listen(port,()=>{
    console.log(`server connected at:http://localhost:${port}`);
}) 