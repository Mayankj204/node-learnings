const fs = require("fs");
const eventEmitter = require("events");
const event = new eventEmitter();

// Load previous count if file exists
let count = { name: 0, item: 0 };
const filePath = "eventCount.json";

if (fs.existsSync(filePath)) {
    const savedData = fs.readFileSync(filePath, "utf-8");
    count = JSON.parse(savedData);
}

// Listen for events
event.on("name", (name) => {
    count.name++;
    console.log(`User name is ${name}`);
    logCount();
});

event.on("item", (name, item) => {
    count.item++;
    console.log(`${name}, purchased ${item}`);
    logCount();
});

event.on("count", () => {
    console.log(count);
});

// Save updated count to file
function logCount() {
    fs.writeFileSync(filePath, JSON.stringify(count, null, 2));
}

// Emit events
event.emit("name", "Mayank");
event.emit("item", "Mayank", "Laptop");
event.emit("count");
