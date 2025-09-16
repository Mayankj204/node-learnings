const path=require("path");
console.log(__dirname);
console.log(__filename);

const filePath = path.join("folder", "file", "figure", "file.txt");
console.log("File Path:", filePath);

const fileExt = path.extname(filePath);
const fileDir = path.dirname(filePath);
const fileBase = path.basename(filePath);
const fileParse = path.parse(filePath);
const fileRoot = fileParse.root;
const fileName = fileParse.name;

console.log("Base:", fileBase);
console.log("Dir:", fileDir);
console.log("Ext:", fileExt);
console.log("Root:", fileRoot);
console.log("Name:", fileName);
console.log("Parse Object:", fileParse);

console.log(path.sep);