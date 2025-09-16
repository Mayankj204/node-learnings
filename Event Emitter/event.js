const eventEmitter= require("events")
const emitter=new eventEmitter();

emitter.on("greet",(arg1 , arg2)=>{
    console.log(`Hello ${arg1}${arg2}`);
}
)

emitter.emit("greet" ,"Mr.","Mayank");