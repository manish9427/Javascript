const readline = require("readline");
const rl = readline.createInterface({input:process.stdin,output:process.stdout });
rl.question("Enter the Name: ", (name)=>{console.log("Name: ",name);})