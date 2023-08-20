---------------------InterView
count
fetch
progress slider bar

-----------------------lecture
BMI Calculator -->Basic Function
Link And Dislike --->Local Storage
Todo --> Local Strorage
Ecommerce->cart,product,checkout-->local storage

---------------------cp
Web basic form

---

1-

# Basic Topic (Fresher)

- var,let and const (diffences)
- loops(for ,while,forEach)
- functions
- if else
- arrow functions
- array
- objects
- event handling

projects =>
counter
calculator

# Advanced Topics

- map, Reduce and filter
- async await
- promise
- this keyword
- destructuring
- callBacks
- hoisting
- closure

# --------------YouTube-----------------------

## JavaScript

- Defination
- Java vs JavaScript
- Execution Platform

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
