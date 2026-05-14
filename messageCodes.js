//  const http=require('http')// importing http module
// const port=8000;
//  const server=http.createServer((req,res)=>{
//     if(req.method==='POST'&&req.url==='/save'){
//         let body='';// we will save our data here
//         req.on('data',(chunk)=>{//listens for data comming rom the user 
//             body+=chunk
//         })
//         req.on('end',()=>{//fired when the data transfer is over
//             res.statusCode=200;
//             res.setHeader('content-type','text/plain ');
//             res.end(`data saved:${body }`)
//         })
       

//     } else if(req.method==='GET'&&req.url==='/dashboard'){
//             res.statusCode=200;
//             res.setHeader('content-type','text/plain ');
//             res.end('welcome to the dashboard')


//     }else{
//         res.statusCode=404;
//         res.end('page not found')
//     }
//  })
//  server.listen(port,()=>{
//     console.log(`server running on:http://127.0.0.1:${port}`)
// //  })
// const http = require('http');

// http.createServer((req, res) => {
//   // Set status code and headers
//   res.writeHead(200, {
//     'Content-Type': 'application/json',
//     'X-Custom-Header': 'Learning-HTTP'
//   });

//   // Write the body
//   if (req.url === '/json') {
//   res.write(JSON.stringify({ message: 'Hello, world!' }))
//   ;
//   console.log(res.m);
//  res.end()
//   }

//   // End the response

// }).listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/old-home') {
    // Permanent redirect
    res.writeHead(301, { 'Location': '/new-home' });
    res.end();
  } else if (req.url === '/new-home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the new home page!</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Redirect server running at http://localhost:3000');
});

