const http=require('http');

const server=http.createServer((req,res)=>{
 console.log(res);
 console.log(`Happy coding`);
 console.log(req.url);

});
const PORT=3001;

server.listen(PORT,()=>{
    console.log(`Server is connected successfully`);
    console.log(`Server is running on port https://localhost:${PORT}`);
});