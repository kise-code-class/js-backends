// // creating an http server
// const url=require('url')
// const http=require('http');// importing the http module
// const { json } = require('stream/consumers');
// //using createServer() method to create our server
// const PORT=8000;
// const server=http.createServer((req,res)=>{
//     const q=url.parse(req.url,true).query
//     contentType='text/html'

//     if(q.json===true){
//         // res.write('hello world')
//         res.writeHead(200,{'Content-Type':'application/json'})
//         //res.end("{name:'john',age:20,gender:'male'}")
//     }else if(contentType==='text/html'){
//         res.write('<h2>text html content</h2>')
        
//     }
//     else{
//         res.write(JSON.stringify({message:"hello world"}))
//     }
//     // else if(req.url==='/departments'){
//     //     res.writeHead(200,{'content-type':'text/html'})
//     //     res.end('<p>html type response</p>')
//     // }
//     res.end()
    
// });
// server.listen(PORT,()=>{
//     console.log(`server running on:http://127.0.0.1:${PORT}`)
// })

const http= require( 'http');
const url=require('url');

const server=http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    let contentType = 'text/html';
    
    if (q.json === 'true') {
        contentType = 'application/json';
    }

    res.writeHead(200, { 'Content-Type': contentType });

    if (contentType === 'text/html') {
        res.write('<html><body><h1>Hello, World!</h1></body></html>');
    } 
    else {
        res.write(JSON.stringify({ message: 'Hello, World!' }));
    }

    res.end();
})
server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});