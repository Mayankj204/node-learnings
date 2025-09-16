const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("I'm just a chill guy , with no tention chilling like i dont have work but has too much pressure ")
        res.end()
    }
   
      if(req.url==='/source'){
        res.write("Boost is the secret of my energy ")
        res.end()
    }
    
    if(req.url==='/admin'){
        res.write("Admin plays well")
        res.end()
    }

})

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})