const http=require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
let name="Mayank";
if(req.url==='/'){
     res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body>');
    res.write(`<h1>Hello Mr ${name}
        This is my Home page.</h1>`);
    res.write('</body>');
    res.write('</html>');

    res.end();

}
else if(req.url==='/about'){
     res.write('<html>');
    res.write('<head><title>About Page</title></head>');
    res.write('<body>');
    res.write(`<h1>Here is the info anbout our organisation</h1>`);
    res.write('</body>');
    res.write('</html>');

    res.end();
    
}
else{
      res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body>');
    res.write(`<h1>Hello Mr ${name}</h1>`);
    res.write('</body>');
    res.write('</html>');

    res.end();
}

  
});
const PORT=3001;

server.listen(PORT,()=>{
    console.log(`Server is connected successfully`);
    console.log(`Server is running on port https://localhost:${PORT}`);
});