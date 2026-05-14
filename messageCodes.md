# http response status codes
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
1. Informational responses (100 – 199)
2. Successful responses (200 – 299)
3. Redirection messages (300 – 399)
4. Client error responses (400 – 499)
5. Server error responses (500 – 599)

## 1. Informational responses (100 – 199)
### 100 Continue
This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
it is used to show that the request hasnt been rejected by the server.

```javascript
const http = require('http');

http.createServer((req, res) => {
  // If client expects 100-continue
  if (req.headers['expect'] === '100-continue') {
    res.writeContinue(); //  sends 100 Continue
    req.on('data', chunk => {
      console.log('Received chunk:', chunk.toString());
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Upload complete');
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world');
  }
}).listen(3000);
```
## 2. Successful responses (200 – 299)
### 203 Non-Authoritative Information
This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.
### 202 Accepted
The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
### 201 Created
The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.
### 200 OK
The request succeeded. The result and meaning of "success" depends on the HTTP method:

**GET**: The resource has been fetched and transmitted in the message body.
**HEAD**: Representation headers are included in the response without any message body.
**PUT or POST**: The resource describing the result of the action is transmitted in the message body.
**TRACE**: The message body contains the request as received by the server.

## Redirection messages (300 – 399)
## 300 Multiple Choices
In agent-driven content negotiation, the request has more than one possible response and the user agent or user should choose one of them. There is no standardized way for clients to automatically choose one of the responses, so this is rarely used.

## 301 Moved Permanently
The URL of the requested resource has been changed permanently. The new URL is given in the response.

## 302 Found
This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future, so the same URI should be used by the client in future requests.

**example**
```javascript 
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
```

## POST request

``` javascript
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    // Collect incoming data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // When all data is received
    req.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Data received', data: body }));
    });

  } else if (req.method === 'GET' && req.url === '/submit') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Send a POST request to /submit with some data');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 
```