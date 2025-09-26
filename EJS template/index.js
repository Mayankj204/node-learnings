const express=require('express');

const app=express();
 
const phone={
    "name":"Iphone 12",
    "camera":"12mp",
    "price":"$999"
}
const user={
    "name": "Mayank",
    "email":"mj32771@gmail.com",
    "bio":"Good boy",
    "phone":"701130",
    // "address":"Delhi"
}
app.get('/',(req,res,next)=>{
      console.log(res.body)
      res.render('index.ejs',{user:user, nano:phone})
})

const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
