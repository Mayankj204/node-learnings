const os = require("os");

console.log("=== OS Module Info ===");

console.log("Free Memory:", os.freemem(), "bytes");
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("Free Memory (MB):", (os.freemem() / 1024 / 1024).toFixed(2), "MB");
console.log("Total Memory (MB):", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");

console.log("CPU Architecture:", os.arch());
console.log("Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("OS Release:", os.release());
console.log("Uptime (seconds):", os.uptime());
console.log("Uptime (hours):", (os.uptime() / 3600).toFixed(2), "hrs");

console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());

console.log("User Info:", os.userInfo());

console.log("CPU Info:");
console.log(os.cpus());

console.log("Network Interfaces:");
console.log(os.networkInterfaces());
