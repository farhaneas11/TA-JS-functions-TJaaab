/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/
/*
function sayHello(){
  alert(`hello world`);
}
sayHello();
*/
/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/
/*
function fullName(){
  let firstName= prompt("enter your first name!");
  let lastName=prompt("enter last name!");
  let fullName=firstName + lastName;
  alert(`${fullName}`);
}
fullName();
*/
/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/
/*
function addTwoNumbers(){
  let firstNum= +prompt("enter your first no!");
  let secondNum = +prompt("enter second no!");
  let sum=firstNum + secondNum;
  alert(`${sum}`);
}
addTwoNumbers();
*/
/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9

  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/
/*
function getTable(){
  let num= +prompt("enter your no!");  
  for(let i=1;i<=10;i++){    
    console.log(`${num} * ${i} = ${num*i}`);
  }
  console.log()
}
 getTable(); 
 */
/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/
/*
function isLeapYear(){
  let year=prompt("enter a year:");
  if(year%2==0){
    alert(`${year} leap year`);
  }
  else{
    alert(`${year} not leap year`);
  }
}
isLeapYear();
*/
/*
6. Create a function named `getFactorial` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`

*/
function getFactorial(){
  let number=+prompt("enter a number:");
  let total =1;
  for(i=number;i>0;i--){
   total=total*i; 
  }
  alert(`factorial of ${number} is ${total}`);
}
getFactorial();