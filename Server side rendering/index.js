const express=require('express');
const path=require('path');
const app=express();
const dirname = path.resolve();
// Use __dirname to create a robust, absolute path to the 'public' folder

app.use(express.static(path.join(dirname, 'public')));
const phone={
    "name":"Iphone 12",
    "camera":"12mp",
    "price":"$999",
    "launch":"2022",
}
const user={
    "name": "Mayank",
    "email":"mj32771@gmail.com",
    "bio":"Good boy",
    "phone":"701130",
    // "address":"Delhi"
}
app.get('/',(req,res,next)=>{
      
      res.render('index.ejs',{user:user, nano:phone})
})

const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
