const Fibonacci = (num) => {
    let first = 0;
    let second = 1;
    const arr = new Array(num);
    arr[0] = first;
    arr[1] = second;
    for(let i=2;i<arr.length;i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    console.log(arr);
}

const num = 6; // 0,1,1,2,3
Fibonacci(num);