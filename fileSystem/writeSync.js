const fs=require("fs");
const path = require('path');
const filePath= path.join(__dirname,'/data.txt');
const write=fs.writeFileSync(filePath,
    "Hello, world!. There will be some more data in the file that can be accessed from the file system. File system can do several operations such as read , write",
    "utf8" , "a"
)
console.log(write);


const read=fs.readFileSync(filePath);
console.log(read.toString());


const append = fs.appendFileSync(filePath, "\n This is the new line of data that will be added to the file");


console.log(read.toString());
const rename=fs.renameSync(filePath,"test.txt")
console.log(read.toString());