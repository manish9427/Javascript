const str = "Manish";

const subString = function(str){
    let left = 0;
    let right = str.length-1;
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            let tring = str.slice(i,j);
            console.log(tring);
        }
    }
}

subString(str);