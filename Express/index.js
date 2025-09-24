const express=require('express');


const app=express();
app.use("/",(req,res,next)=>{
   console.log(`First Line `)
 res.send("<p>Hello there it is the cool guy standing in the line</p>")
  next()

});
app.use("/about",(req,res,next)=>{
   console.log(`Second Line `)
   res.send("<p>Hello there it is the second line</p>")
});


const PORT=3001;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
