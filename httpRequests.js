 //types of http requests
 //GET-->get data from the server
 //POST-->send data to the server
 //PUT--update a data in the server
 //DELETE--delete data in the server
 //PATCH--update data on the server

 //GET REQUEST
 //POST REQUEST
 const http=require('http')// importing http module
const port=8000;
 const server=http.createServer((req,res)=>{
    if(req.method==='POST'&&req.url==='/save'){
        let body='';// we will save our data here
        req.on('data',(chunk)=>{//listens for data comming rom the user 
            body+=chunk
        })
        req.on('end',()=>{//fired when the data transfer is over
            res.statusCode=200;
            res.setHeader('content-type','text/plain ');
            res.end(`data saved:${body }`)
        })
       

    } else if(req.method==='GET'&&req.url==='/dashboard'){
            res.statusCode=200;
            res.setHeader('content-type','text/plain ');
            res.end('welcome to the dashboard')


    }else{
        res.statusCode=404;
        res.end('page not found')
    }
 })
 server.listen(port,()=>{
    console.log(`server running on:http://127.0.0.1:${port}`)
 })
//  const http = require('http');

// // Replace with the desired URL
// const url = 'http://api.open-notify.org/astros.json';

// http.get(url, (res) => {
//   let data = '';

//   // Listen for data chunks
//   res.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received
//   res.on('end', () => {
//     console.log('Response:', JSON.parse(data));
//   });

// }).on('error', (err) => {
//   console.log('Error:', err.message);
// });
