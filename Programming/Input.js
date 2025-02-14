const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter The Name: ',(name)=>{
    myName(name);
});

const myName = function(name){
    console.log(`Name you Entered: ${name}`); 
    rl.close();
}

