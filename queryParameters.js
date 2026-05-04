const http= require( 'http');
const url=require('url');//we need this module fi us to parse query strings

const server=http.createServer((req, res) => {
    res.setHeader('content-type','text/html')//sets the header to handle html/text files
    const parsedUrl=url.parse(req.url,true)//when set true, the query is parsed into javascript objects
    //eg 'https://example.com/page?name=alex&gender=male'==>{name:'alex',gender:'male'}

    const pathname=parsedUrl.pathname;//our full path name
    console.log(pathname)// example: /home/accounts
    const query=parsedUrl.query;
    console.log(query)//example:{ isloggedIn: 'true', admin: 'true' }

    //extracting the query params
    if(pathname==='/'){
        res.end(`this is our home page,our query is:${query.name} ${query.username} ${query.password}`)
    }else{
        res.statusCode=400;
        res.end('page not found')
    }
});
server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});