 // Closure is a feture in JS hich enable user to use variable and datatype of outer funtion 

 const fun=()=> {
    let a=10;
    return () => {
        console.log(a);
    }
 }

 5
 const myClosure = fun();
 myClosure();