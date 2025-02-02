const PrimeNumber = function(){
    let prime = false;
    for(let i = 2, sqrt = Math.sqrt(this); i <= sqrt; i++){
        if(this % i === 0){
            prime = false;
            break;
        }
    }
    return prime;

}
let n  = 3;
const solution = PrimeNumber(n);
console.log(solution);