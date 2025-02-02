const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('Enter The Name: ',(name)=>{
    myName(name);
});

const myName = function(name){
    console.log(`Name you Entered: ${name}`);
    readline.close();
}