/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
/*
function sayHello(name){
  alert(`Hello ${name}`);
}
sayHello('farhan');
*/
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
/*
function getFullName(firstName,lastName){
  return`${firstName} ${lastName}`;
}
let msg=getFullName("Farhan",'EAS');
alert(msg);
*/
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
/*
function addTwoNumbers(){  
  firstNum=+prompt("enter first number:");
  secondNum=+prompt("enter number:");
  if(firstNum==" " && secondNum==" "){
    alert("enter valid input")
  }
  else{
    return`${firstNum + secondNum}`;
  }
}
let add=addTwoNumbers();
alert(add);
*/
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc(firstNum , secondNum ,operator){  
  if(operator=="add"){
    return`${firstNum+secondNum}`;
  }
  else if(operator=="sub"){
    return`${firstNum-secondNum}`;
  }
  else if(operator=="mul"){
    return`${firstNum*secondNum}`;
  }
  else if(operator=="div"){
    return`${firstNum/secondNum}`;
   }
   else{
     alert("invalid input");
   }
  
}
let cal=calc(12 , 23 , "div");
alert(cal);

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
/*
function isLeapYear(){
  let year=prompt("enter a year:");
  if(year%2==0){
    return`leap year:${year}`;
  }
  else {
    return`not leap year${year}`;
  }
}
let leapyear=isLeapYear();
alert(leapyear);
*/
/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
/*
function getFactorial(){
  let number=+prompt("enter a number");
  let total=1;
  for(let i=1 ;i<=number;i++){
    total=total*i;
  }
  return`${total}`;
}
let fact=getFactorial();
alert(fact);
*/