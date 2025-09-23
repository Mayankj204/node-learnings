const express=require('express');

const http=require('http');

const app=express();
app.use((res,req,next)=>{
   console.log(`First Line `)

});
app.use((res,req,next)=>{
   console.log(`Second Line `)
   
});

const server=http.createServer(app)
const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
