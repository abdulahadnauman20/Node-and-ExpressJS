const http = require('http');

const server=http.createServer((request,response)=>{
if(request.url==="/")
{
    response.end("Welcome to our home page!")
}
else if(request.url==="/about")
{
    response.end("Here is Our Short Story!")
}

else
{
response.end(`
<h1>Oops!</h1>
<p>We can't Find the Page you are looking for</p>
<a href="/">Back Home</a>
`)
}
})

server.listen(5000);