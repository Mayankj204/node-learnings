const http=require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
let name="Mayank";
console.log(req.url , req.method);
  if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body>');
        res.write(`<h1>Hello Mr ${name}, This is my Home page.</h1>`);
        
        // Form starts here
        res.write('<form action="/about" method="POST">');
        res.write('<label for="username">Username:</label><br>');
        res.write('<input type="text" id="username" name="username"><br><br>');
        res.write('<label for="email">Email:</label><br>');
        res.write('<input type="email" id="email" name="email"><br><br>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        
        res.write('</body>');
        res.write('</html>');
       
    }
else if(req.url==='/about'){
     res.write('<html>');
    res.write('<head><title>About Page</title></head>');
    res.write('<body>');
    res.write(`<h1>Here is the info anbout our organisation</h1>`);
    res.write('</body>');
    res.write('</html>');

  return  res.end();
    
}

   res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body>');
    res.write(`<h1>Hello Mr ${name}</h1>`);
    res.write('</body>');
    res.write('</html>');

    res.end();

  
});
const PORT=3001;

server.listen(PORT,()=>{
    console.log(`Server is connected successfully`);
    console.log(`Server is running on port https://localhost:${PORT}`);
});