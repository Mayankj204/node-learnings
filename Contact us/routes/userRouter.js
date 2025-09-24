const express=require('express');
const userRouter=express.Router();


userRouter.get("/user/about",(req,res,next)=>{
   console.log(`Second Line `)
   res.send(`<p>Hello there it is the about section</p>
    <form method="POST" action="/user/about">
    <input type="text" name="name" placeholder="Name"> 
    <input type="text" name="email" placeholder="Email">
    <button type="submit">Submit</button>
    </form>
    <a href="/">Home Page</a>
    `)
});


    userRouter.post("/user/about", (req, res, next) => {
  console.log(req.body);
  res.send(`<p> Chal be ho gya tera kaam</p>
    <a href="/">Home Page</a>`);
});
module.exports= userRouter;

