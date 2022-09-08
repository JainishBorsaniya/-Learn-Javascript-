function x(){
    var x=7
   return function y(){ // y with its lexical enviroment bundled together to form a closure.
        console.log(x)
    }
}
var z = x(); // x removed from callstack
console.log(z);
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.
z();  // x()() calling inner function -y here

hoisted = 3;
console.log(hoisted)
var hoisted;

var a;
console.log(a); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

var c = 2;
var d = "2";
console.log(c == d)  // Returns true since the value of both x and y is the same
console.log(c === d) // Returns false since the typeof x is "number" and typeof y is "string"


var x = 3;
var y = "3";
console.log(x + y) // Returns "33" 

var x = 24;
var y = "Hello";
console.log(x + y)   // Returns "24Hello"; 

var name = "Vivek";
var surname = " Bisht";
console.log(name + surname)     // Returns "Vivek Bisht"

var x = 3;
var y = "3";
console.log(x - y)    //Returns 0 since the variable y (string type) is converted to a number type

// boolean Coercion
var x = 0;                  
var y = 23;
        
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

// logical operators
var x = 220;
var y = "Hello";
var z = undefined;
        
console.log(x || y)    // Returns 220 since the first value is truthy
        
console.log(x || z)   // Returns 220 since the first value is truthy
        
console.log(x && y)    // Returns "Hello" since both the values are truthy
        
console.log(y && z)   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}

// Equality coercion '=='
var a = 12;
var b = "12";
console.log(a == b) // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

var a = 226;
var b = "226";

console.log(a === b) // Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal. 

// javascript is loosely(dynamically) type language
var m = 55;
var m = "namaste javascript";
console.log(m); // namaste javascript

function multiply(a,b){
    return a*b;
  }
  
  function currying(fn){
    return function(a){
      return function(b){
        return fn(a,b);
      }
    }
  }
  
  var curriedMultiply = currying(multiply);
  
  console.log(multiply(4, 3)); // Returns 12
  
  console.log(curriedMultiply(4)(3)); // Also returns 12

  // Global Scope
  var globalVariable = "Hello world";

function sendMessage(){
  return globalVariable; // can access globalVariable since it's written in global space
}
function sendMessage2(){
  return sendMessage(); // Can access sendMessage function since it's written in global space
}
sendMessage2();  // Returns “Hello world”

// function scope
//function awesomeFunction(){
  //  var a = 2;
 // 
  //  var multiplyBy2 = function(){
//      console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
 //   }
 // }
 // console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
  
 // multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

  // Block Scope
  {
    let x = 45;
  }
  
  console.log(x); // Gives reference error since x cannot be accessed outside of the block
  
  //for(let i=0; i<2; i++){
    // do something
 // }
  
  //console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block

  // Scope Chain
  var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();

// memoization
function memoizedAddTo256(){
    var cache = {};
  
    return function(num){
      if(num in cache){
        console.log("cached value");
        return cache[num]
      }
      else{
        cache[num] = num + 256;
        return cache[num];
      }
    }
  }
  var memoizedFunc = memoizedAddTo256();
  
  memoizedFunc(20); // Normal return
  memoizedFunc(20); // Cached return

// Block scope
var x =7;
{
    var y=10;
    console.log(x);
    console.log(y);

}  
console.log(x);
console.log(y); // global scope

let p = 100;
{
    const a =10;
    let p = 20;
    var n = 8;
    console.log(a);
    console.log(p);
    console.log(n);
}
console.log(p);

  // this
var obj = {
  name:  "vivek",
  getName: function(){
  console.log(this.name);
}
}
 
obj.getName();
  
var obj = {
  name:  "vivek",
  getName: function(){
  console.log(this.name);
}
   
}
     
var getName = obj.getName;
     
var obj2 = {name:"akshay", getName };
obj2.getName();

//This method invokes a method (function) by specifying the owner object.

function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj); // Returns "Hello Sandy"	
        
//call() method allows an object to use the method (function) of another object.

var person = {
  age: 23,
  getAge: function(){
    return this.age;
  }
}        
var person2 = {age:  54};
person.getAge.call(person2);  

//call() accepts arguments:
function saySomething(message){
  return this.name + " is " + message;
}     
var person4 = {name:  "John"};     
saySomething.call(person4, "awesome");// Returns "John is awesome" 

// call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message){
  return this.name + " is " + message;
}        
var person4 = {name:  "John"};
saySomething.apply(person4, ["awesome"]);

// bind():

//This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
  
var bikeDetails = {
  displayDetails: function(registrationNumber,brandName){
  return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
}
}
 
var person1 = {name:  "Vivek"};
   
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
    
// Binds the displayDetails function to the person1 object
      
    
detailsOfPerson1();
// Returns Vivek, bike details: TS0122, Bullet


// Functions that are used as an argument to another function are called callback functions.

function divideByHalf(sum){
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum){
  console.log(sum * 2);
}

function operationOnSum(num1,num2,operation){
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20

// Traditional Function Expression
var add = function(a,b){
  return a + b;
}

// Arrow Function Expression
var arrowAdd = (a,b) => a + b;


 // this keyword with arrow function
var obj1 = {
  valueOfThis: function(){
    return this;
  }
}
var obj2 = {
  valueOfThis: ()=>{
    return this;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object

// spread operator
function addFourNumbers(num1,num2,num3,num4){
  return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];


addFourNumbers(...fourNumbers);
// Spreads [5,6,7,8] as 5,6,7,8


// Promise

function sumOfThreeElements(...elements){
  return new Promise((resolve,reject)=>{
    if(elements.length > 3 ){
      reject("Only three elements or less are allowed");
    }
    else{
      let sum = 0;
      let i = 0;
      while(i < elements.length){
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: "+sum);
    }
  })
}
sumOfThreeElements(4, 5, 6)
.then(result=> console.log(result))
.catch(error=> console.log(error));
// In the code above, the promise is fulfilled so the then() method gets executed

sumOfThreeElements(7, 0, 33, 41)
.then(result => console.log(result))
.catch(error=> console.log(error));
// In the code above, the promise is rejected hence the catch() method gets executed
