# Basic Topic (Fresher)

- var,let and const (diffences)
- loops(for ,while,forEach)
- functions
- if else
- arrow functions
- array
- objects
- event handling

# Advanced Topics

- map, Reduce and filter
- async await
- promise
- this keyword
- destructuring
- callBacks
- hoisting
- closure

# ------------ Left Out Topics

- Dom
- Polyfills
- oops(inheritanse, polymorphism,Encpsulation,Abstraction)
- setTimeOut
- SetInterval
- === vs ==

## === vs == (Equality operator)

- == perform coercion -> make the operand of same type
- === does not perform coercion

# --------------YouTube-----------------------

## JavaScript

- Defination
  javascript is a programming language used for making dynamic web page
- Java vs JavaScript
- Execution Platform
  chrome
  any browser

## DataType

### Primitive

- Number
- String
- Boolean
- Null
- Undefined
- BigInt
- Symbol

### Non Primitive

- Object
- Array

## var, let & const

let and const is a functional scope
var is global scope

## Hoisting

declaring the variable and function at the top of the scope

## Scope Chain and LexicalScope

## Closure

variable of outer function are accessableby inner function

## This Keyword

this is a keyword which refers to an object and it value depends on the senarios in which it is called
add

## Call , Apply and Bind

- call =>
  call is the inbuilt method (Function) in javaScript
  call method allows an object to use the method of another object
  we can access the function of other object into our new object

- apply =>
  there is only differnce from call method is thst here we are passing the argument in array from were as we in call method pass it seprated by commas

- bind =>
  this method retun a value that is our function

## map,filter and reduce

these are the array methods

- map =>
  used for creating new array from the existing one
  map(callback) ()=> { ... }
  (element,index,array)=>{}

- filter =>
  fiter out some value on the basis of our need and given condition

- reduce =>
  reduce tehe array into single value
  (preValue,currValue)=>{}

## Promise

promise is a special type of object in javascript
it produce a value after a successful syncronous operation
or an error if not successful because of network error , time out and so on

let promise=new promise(functio(reject,resolve){
//make a asynchronous call and either resolve or reject
})

- syncronous
  console.log("1")
  console.log("2")
  console.log("3")

- asynchronous
  console.log("1")
  setTimeout(()=>{
  console.log("2");
  },1000)
  console.log("3")

- promise object has some internal properties
  1 - state =>
  pending : initially when executor function starts the execution
  fullfilled : when promise is resolved
  rejected:when the promise is rejected

  2 - result =>
  undefined : initialy when the state value is pending
  value : when resolve(value) is called
  error : when reject(error) is called

Note => callback hell solution is promise

# -------------------------Topic Not Covered

## Event loop

1- call stack
2- web apis
3- callback queue
4- event loop
