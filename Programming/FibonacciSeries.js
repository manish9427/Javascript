const readline = require("readline");
const rl = readline.createInterface({input:process.stdin,output:process.stdout});
rl.question("Enter the number: ",(num)=>{
    let n = parseInt(num);
    let first = 0;
    let second = 1;
    let fibonacci = [first,second];
    for(let i =2 ;i<n;i++){
        let next = first + second;
        fibonacci.push(next);
        first = second;
        second = next;
    }
    console.log(fibonacci);
    rl.close();
});


