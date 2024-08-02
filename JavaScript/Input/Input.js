const readline = require("readline");
const rl = readline.createInterface({input:process.stdin,output:process.stdout})
rl.question("Enter the Name: ",(userInput)=>{
    console.log("User Input : ",userInput);
    rl.close();
})