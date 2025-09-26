const express=require('express');
const path=require('path');

const app=express();
const PORT=2000;
const dir=path.resolve()
const currPath=path.join(dir,'index.html')
const phone={
    "name":"Iphone 12",
    "camera":"12mp",
    "price":"$999"
}
app.get('/books-home',(req,res,next)=>{
        // res.json(phone);
     res.sendFile(currPath);

    console.log("My current directory is",dir);
    console.log("My current path is",currPath);
});

const contactPath=path.join(dir,'contact.html')

app.get('/contact-us',(req,res,next)=>{
res.sendFile(contactPath);
})
app.use(express.json());            // for JSON requests
app.use(express.urlencoded()); // for form submissions

app.post('/contact-us',(req,res,next)=>{
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);  
    console.log(req.url)
  
    res.send("<h1   style='background-color:red' 'text-align:center'>Response stored successfully</h1>")
    })

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
