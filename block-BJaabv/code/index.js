// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/
/*
function calculateDogAge() {
  // Your code goes here
  let puppyage = prompt("enter your puppys age");
  let dogage = puppyage * 7;
  alert(`your puppys age : ${dogage}`);
}
calculateDogAge();
*/
/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/
/*
function calculateMoviesToWatch() {
  // Your code goes here
  let age =prompt("enter your current age:");
  let movie =prompt("enter movies watched in a week:");
  let totalmovie = movie * 4 *12;
  alert(`total movie watched is :${totalmovie * age }`);
}
calculateMoviesToWatch();
*/
/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/
/*
function celsiusToFahrenheit() {
  // Your code goes here
  let celcius = prompt("enter celcius: ") ;
  let fahrenheit = celcius * 1.8 + 32 ;
  alert(`fahrenheit is: ${fahrenheit}`);
}
celsiusToFahrenheit();
*/
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/
/*
function celsiusToFahrenheit() {
  // Your code goes here
  let celcius = prompt("enter fahrenheit: ") ;
  let fahrenheit = (celcius - 32) * 0.555 ;
  alert(`celcius is: ${fahrenheit}`);
}
celsiusToFahrenheit();
*/
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/
/*
function pow1() {
  // Your code goes here
  let n= prompt("enter number:");
  let x =prompt("enter x");
  let number = n**x;
  alert(number);
}
pow1();
*/
// Test
/*
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"
*/
/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN() {
  // Your code goes here
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/
/*
function sumOfN() {
  // Your code goes here
  let integer =prompt("enter integer");
  let sum= 0;
  for(i=0;i<=integer;i++){
    sum = sum+i;
  }
  alert(sum);
}
sumOfN();
*/
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/
function multiples(){
  let n = prompt("enter number;");
  let product1 = 1;
  let product2 = 1;
  for(i=1;i<=n;i=i++){    
      if(i%5===0 || i%7===0){
        product1 =product1 + i;           
      }
      alert(`${product1}`);
  }
  
}
multiples();
// Your code goes here

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/
/*
function min(x,xy) {
  // Your code goes here  
  if(x>xy){
    alert(`${xy} is minimum`);
  }
  else{
    alert(`${x} is minimum`);
  }
}

min(0, 10);
min(0, -10);
alert(min);
*/
/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/
/*
function typeCheck() {
  // Your code goes here
  let arg =prompt("enter argument");  
  alert(typeof arg);

}
typeCheck();
typeof typeCheck;
alert(typeof typeCheck);
*/