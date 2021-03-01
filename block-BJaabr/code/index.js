// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration

function convertToString(n) {
  return String(n);
}
convertToString(21);

// - Write a Function Expression

let convertToString1 = function (n) {
  return String(n);
};
convertToString1(21);

// - Write an Arrow Function without curly brackets (if possible)
let convertToString2 = (n) => String(n);
convertToString2(22);
// - Write an Arrow Function with curly brackets
let convertToString3 = (n) => {
  return String(n);
};
convertToString3(21);
// - Execute the function
/*
convertToString4(21);*/

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num){
  return`${num + 1}`;
}
addOne(20);
// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)
let addOn=function(num1) {
  return`${num1 + 1}`;
}

// - Write an Arrow Function with curly brackets
let addonn = (num2) =>  num2 + 1 ;
// - Execute the function
addonn(20);
// - Execute the function and store the return value in a variable.
let addvar =addOn(20);
alert (addvar);
// - What is the typeof returnValue
typeof addOnn; //function
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(sub){
  return`${sub - 1}`;
}
substractOne(20);
// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)
let subOn=function(sub1) {
  return`${sub1 - 1}`;
}
// - Write an Arrow Function with curly brackets
let subonn = (sub2) =>  sub2 - 1 ;
// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue
typeof subOnn;//function
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(ore){
  if(ore%2==0){
    return`even`;
  }
  else {
    return`odd`;
  }  
}
// - Write an anonymous Function Expression
let oddorEven = (ore1) => ore1%2==0 ;'even';
oddorEven(20);
// - Write an named Function Expression
let oddorEven = function oddOrEven(ore){
  if(ore%2==0){
    return`even`;
  }
  else {
    return`odd`;
  }  
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable
let oddeven = oddOrEven(21);
// - What is the typeof returnValue
typeof oddOrEven;//function