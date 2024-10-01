const readline = require("readline")
const rl = readline.createInterface({input:process.stdin,output:process.stdout})
// var Name = 'Man';
rl.question("Enter Name: ",(Name)=>{
    var name =Name;
    let str = `${name}ish`;

let strType =  type(str);
console.log("Type of Input: ",strType);

let reversedStr = reverseString(str);

console.log("Original String: ",str);
console.log("Reverse String: ",reversedStr);
rl.close();
} )


const reverseString = (str) =>{
    let ans = "";
    for(let i=str.length-1;i>=0;i--){
        ans+= str.charAt(i);
    }
    return ans;
}

const type = (str) => {
    return typeof(str);
}

