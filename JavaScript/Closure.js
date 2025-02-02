const Outer = () =>{
    let a = 10;
    console.log("Outer function");
    const inner = () => {
        console.log(`Inner function having value ${a}`);
    }
    inner();
}

Outer();