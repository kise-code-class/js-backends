const http = require("http"); // importing http module
const PORT = 8000; //port number
const myobj={
    name:'Tony Stark',
    appearence:'Avengers',
    year:'2300',

}
//creating the server
const server = http.createServer((request, response) => {
  //create new HTTP server
  if (request.url === "/home") {
    // response.statusCode = 200; //OK status code
    response.writeHead(200,{'Content-Type':'application/json'}) //setting content type
    //response.write("welcome to our first server data"); //write some chunks of data
    response.end("{ name:'Tony Stark',appearence:'Avengers',year:'2300',}"); //signals that the response is complete
  } 
    //setting multiple headers
    else if(request.url==='/headers'){
      response.writeHead(200,{
        'cache-control':'no-cache',
        'x-content-type-options':'nosniff',
        // 'content-encoding':'gzip',
        'user-agent':'mozilla',
        'accept':'application/json',
        'referer':'google.com'
      })
      response.end("{ name:'Tony Stark',appearence:'Avengers',year:'2300',}")
    }
  else {
    response.statusCode = 404; //page not found
    response.end("page not found");
  }
});
//listening
server.listen(PORT, () => {
  console.log(`server running at:http://localhost:${PORT}`);
});
