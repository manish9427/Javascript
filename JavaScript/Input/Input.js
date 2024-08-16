const readline = require("readline");
const rl = readline.createInterface({input:process.stdin,output:process.stdout})
rl.question("Enter the Name: ",(userInput)=>{
    console.log("User Input : ",userInput);
    let a = userInput;
    rl.close();
})


//Print Element
for(let i=0;i<a.length;i++){
    console.log("ans: "+ i+1);
}