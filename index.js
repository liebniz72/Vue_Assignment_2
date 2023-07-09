                                Module-2
                                Assignment

Exercise 1: 
Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.
 
Example:
Input:
const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
 
Output:
{ name: 'John', age: 30 }

Answer:
-----------------------
function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [value1, , value2] = arr;

  return { name, age };
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

const result = destructureExample(obj, arr);
console.log(result);

-------------------------

Exercise 2:
Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
 
Example:
Input:
sumNumbers(1, 2, 3, 4, 5);
 
Output:
15

Answer:
-------------------
function sumNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumNumbers(1, 2, 3, 4, 5);
console.log(result);
-------------------

Exercise 3:
 Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."
 
Example:
Input:
createGreeting('Alice');
 
Output:
"Hello, Alice! Welcome to our website."

Answer:
--------------------------


function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

const greeting = createGreeting('Alice');
console.log(greeting);
---------------------------

Exercise 4: 
Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.
 
Example:
Input:
isEven(7);
 
Output:
"Odd"

Answer:
----------
function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

const result = isEven(7);
console.log(result);
---------------

Exercise 5: 
Convert the following function to an arrow function:
 
function multiply(a, b) {
  return a * b;
}


Answer:

---------------
const multiply = (a, b) => a * b;
--------------

Exercise 6: 
Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).
 
Example:
Input:
getLargestNumber(10, 5);
 
Output:
10


Answer:

----------------
function getLargestNumber(a, b) {
  return a > b ? a : b;
}

const result = getLargestNumber(10, 5);
console.log(result);

----------------

Exercise 7: 
Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.
 
Example:
Input:
const address = { street: '123 Main St', country: 'USA' };
 
Output:
"Unknown"


Answer:

---------------
function getAddressCity(address) {
  return address?.city ?? "Unknown";
}

const address = { street: '123 Main St', country: 'USA' };
const city = getAddressCity(address);
console.log(city);
---------------

Exercise 8: 
Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.
 
Example:
Input:
doubleNumbers([1, 2, 3, 4, 5]);
 
Output:
[2, 4, 6, 8, 10]


Answer:

-----------
function doubleNumbers(numbers) {
  return numbers.map(number => number * 2);
}

const inputArray = [1, 2, 3, 4, 5];
const doubledArray = doubleNumbers(inputArray);
console.log(doubledArray);

-----------

Exercise 9: 
Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.
 
Example:
Input:
filterEvenNumbers([1, 2, 3, 4, 5]);
 
Output:
[2, 4]

Answer:

------------
function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

const inputArray = [1, 2, 3, 4, 5];
const evenNumbersArray = filterEvenNumbers(inputArray);
console.log(evenNumbersArray);
------------


Exercise 10: 
Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.
 
Example:
Input:
sumArray([1, 2, 3, 4, 5]);
 
Output:
15


Answer:
-----------

function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const inputArray = [1, 2, 3, 4, 5];
const sum = sumArray(inputArray);
console.log(sum);

------------------

Exercise 11: 
Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.
 
Example:
Input:
sortNumbers([5, 2, 8, 1, 4]);
 
Output:
[1, 2, 4, 5, 8]


Answer:

------------
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

const inputArray = [5, 2, 8, 1, 4];
const sortedArray = sortNumbers(inputArray);
console.log(sortedArray);
-----------





