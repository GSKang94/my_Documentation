## JS Cheatsheet

https://mbeaudru.github.io/modern-js-cheatsheet/ 

## ES6 Cheatsheet

http://www.developer-cheatsheets.com/es6

## Add external js file
```js
<script  type="text/javascript"  src="portfolio.js"></script>
```
## Night mode
```js
// Select the button
 const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function () {

// Then toggle (add/remove) the .dark-theme class to the body
document.body.classList.toggle('dark-theme');
 })

//HTML
<body class="dark-theme || light-theme">

    <button class="btn-toggle">Toggle Dark Mode</button>

</body>
```
## Get and set css variables
```js
let  style = getComputedStyle(document.body);
let  gridColor = style.getPropertyValue('--grid-color');
this.style.backgroundColor = gridColor;

container.style.setProperty("--grid-row-column", rows);
```

## Add style on scroll
```js
const navbar = document.querySelector('#navbar');

window.onscroll  = () => {

      if (window.scrollY >  530) {

            navbar.classList.add('nav-active');

      } else {

            navbar.classList.remove('nav-active');
      }
};
```
### Hide keyboard on keypress
`this.blur()`



## Round numbers
```js
//To one decimal
	Math.round(num * 10) / 10;
//add zeros for more decimal places
```
## Primitive Datatypes


- **Numbers:** 3,   -3,   3.4

  ```js
   3 + 4   ,     3*4    ,    3/4   ,  3   %   4 (modulo operator use to  find remainder)
   N.B-- In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`.
   + , - etc. are called arithmetic operators.
   Decimal numbers are known as floats..
  ```


- **Strings:** ”Hello world” , ‘34’

   ```js
   “Charlie”   +   ”brown”  //Concatenation 
   ```

- Boolean: True or false
- null means non-existent
- undentified (Means the value is not defined.)
---
### Exponentiation **
The exponentiation operator  `a ** b`  multiplies  `a`  by itself  `b`  times.
## Literal Escaping
```js
var name = 'Charlie\”Brown\”'
\\Charlie"Brown"     
New line   
'Charlie\nBrown'
tab
'Charlie\tBrown'         
```
## Check if num. is positive/negative
`Math.sign(num)`

## Convert Non-number
```js
alert( +true ); // 1
alert( +"" ); // 0
 ```
 
## String to number
```js
Number(string);
var age = parseInt(prompt('Enter your age'))
```

## Number to string

```js
var a = 88;
var b = a.toString();
```
## fibonacci array
```js
let  fib = [];

const  fibonacci = function (num) {

if (Math.sign(+num) === -1) {
	return  "OOPS"
} else {
	fib[0] = 1;
	fib[1] = 1;

	for (i = 2; i < +num; i++) {
		fib[i] = fib[i - 2] + fib[i - 1]
		}
	return  fib[+num - 1]
	}
}
```

## string of random numbers.

```js
var a = Math.random();
var b = a.toString();
var c = b.slice(2,6);
        or
var d = function() {
        var x = Math.random().toString().slice(3,8);
        console.log(x);
}
```
## Length property
```js
console.log("Hello".length)
5
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions.length);
// Output: 2
```
# Variables

It is a container and we give a name to it.
Variables let us store our data which we can refer later.

```js
var          name=               "Gagan";
    this is container name. This is value of variable.
```

N.B-- The variables should be **camelCased**. This means, the first letter should be small.
N.B-- Variables name can never start with a number or a symbol except for the $sign.
N.B--  “=” is an **assignment operator**, that means it assign value to the variable.


## Let Variable (ES6)
- We cannot overwrite a variable declaration.
- The scope of let variable is limited to block, statement or expression where it was declared.

N.B--You can leave the value of let to undefined but it is not possible in case of const.


## Const Variable
- const variables are read-only and inmutable.
- We cannot reassign them.
-  When naming constants, use all uppercase letters, with words separated by an underscore.
    const FAV_PET = "Cats";
    FAV_PET = "Dogs"; // returns error
- We can mutate an array or object declared using const.
    const num = [3,4,5];
    num[1] = 8;
    console.log(num); //[3,8,5]
## Object.freeze

Use this method to prevent mutation in objects.

```js
let dog = {
  name: "Mandy",
  breed: "Bull-terrior"
};
object.freeze(dog);
dog.name = "Sheru" //This will be ignored.
```
## Variable Hoisting

We cannot access a variable before its expression.

    console.log(age);
    var age = 23;
    //undefined
## String Interpolation

We can do this to avoid string concatenation and to improve readability of our code.
**Using template literals**

```js
const myPet = 'Dog';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet Dog.
```
## .trim( )
```js
var str = " Hello World! ";  
alert(str.trim());
```
## charAt( )
The  `charAt()`  method returns the character at a specified index (position) in a string:
```js
var str = "HELLO WORLD";  
str.charAt(0); // returns H
```
## .substr( )

The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

string.substr(start,length)

```js
var str = "Hello world!";
var res = str.substr(1, 4);
//'ello'

res = str.substr(3);
//'o world!'
```



## Comments

**N.B-- Comments should explain why, not what.**

    //This is a comment.


## Typeof
```js
Let you know the type of input.
typeof 4 //returns number
```
## Mathematical Assignment Operators
```js
Instead of 
w = w + 5;
, We can write
w += 5;
So,/= *= += -= are operators
N.B--- While using assignment operators in JS, we always read the syntax from right to left.
```


## ++ and -- operators
```js
let a = 10;
a++; (It means a = a + 1;)
console.log(a); // Output: 11
```
## Spread operator

https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831

## Clear console

    clear()


## alert

Pops up message to the user.

    alert("hello user")


## Console.log
- used to print something to the console or to test our code.
- If we want multilines, we can use ‘\n’


## Prompt

To get input from user.

    prompt("What's your name")


## Boolean Logic
```js
== is called equality operator.
=== is called strict equality operator.
Always use x==="5" instead of x=="5"
=== checks if the value and type are both equal.
!== checks if the value and type are not equal.
== and != won't check the type.
x==0 is false
x==1 is true
naN=naN is false
```


## AND,OR and NOT

Assuming x = 5 and y = 9

| Operator | Name | Example           | Result |
| -------- | ---- | ----------------- | ------ |
| &&       | AND  | x < 10 && x !== 5 | false  |
| ||       | OR   | y > 9 || x === 5  | true   |
| !        | NOT  | !(x === y)        | true   |

**Example of AND operator**

```js
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
The code will only execute if both conditions are satisfied (True).
```

**Example of OR operator**

```js
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
The code will execute if either of two conditions are true.
```

**Example of NOT operator**

    let excited = true;
    console.log(!excited); // Prints false
    
    let sleepy = false;
    console.log(!sleepy); // Prints true
    The ! operator reverses or negates the value of a boolean.


## Falsy values
```js
   false
   0
   "" (Empty string)
   null
   undefined
   NaN (Not a Number)
Everything Else Is Truthy.
```


# Conditionals

Adding logic to the code.
N.B-- We can write a if….else statement inside another if….else statement.

## If
```js
let sale = true;
if(sale){
  console.log('Time to buy!');
}  //Prints Time to buy!
So, our code will only run if it is true.
```

But what will happen **if** it is false?
****
## else
```js
if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}
```
## else if
- We use this to add more conditions to our **if……else statement.**
- We can add many **else if** statements to make our code complex.


## Ternary operator

It is used as a shorthand of **if ……else** statement. The value in the left of question mark picks which of the two value will come out.
When it is true, it chooses the middle value, and vice-versa.

- **We can use this as a** **switch** **inside another if…else statement.**


```js
condition ? statement-if-true : statement-if-false;
var age = 26;
var canDrinkAlcohol =
(age > 21) ? "True, over 21" : "False, under 21";
console.log(canDrinkAlcohol); // "True, over 21"
```


## The Switch Statements

**A short-form of else if conditions.**

```js
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place' : 
    console.log('You get the gold medal!');
  break
  case 'second place' :
    console.log('You get the silver medal!');
    break
  case 'third place' :
    console.log('You get the bronze medal!');
    break
    default : 
    console.log('No medal awarded.');
    break
}
```


# Functions

A function is a reusable  block that groups together a sequence of statements to perform a specific task. They are like machines that receives an input and return output.

## Function Declaration
![](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/declaration.svg)

## Calling a function
![Function execution diagram](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/function+execution.svg)

## Parameters and Arguments

Parameters act as a placeholder text.

![JavaScript syntax for declaring a function with parameters](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/function+parameters.svg)

![JavaScript syntax for invoking a function with arguments as values](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/by_value.svg)

## Default Parameters

Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is `undefined` when called.


    function greeting (name = 'stranger') {
      console.log(`Hello, ${name}!`)
    }
    greeting('Nick') // Output: Hello, Nick!
    greeting() // Output: Hello, stranger!


## Return Keyword

N.B-- We d`onot need the break keyword in a switch statement because return does the same thing.

![using return keyword in a function](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/function+return.svg)

## Function Expressions 

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

![defining a function expression](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/expression.svg)


## **Arrow Functions**

Arrow functions remove the need to type out the keyword `function` every time you need to create a function. Instead, you first include the parameters inside the `( )` and then add an arrow `=>` that points to the function body surrounded in `{ }` like this:

```js
const rectangleArea = (width, height) => {
  let area = width * height;
  return area
}
```
- We can also write one line statements without using return keyword.
    // doubles input value and returns it
    const doubler = (item) => item * 2;


## **Higher Order functions**

 A *higher-order function* is a function that either accepts functions as parameters, returns a function, or both!

## First- class functions
- Functions that accepts other functions as an arguments.
    var years = [1990, 1965, 1937, 2005, 1998];

    ```js
    function arrayCalc(arr, fn) {
              var arrRes = [];
              for (var i = 0; i < arr.length; i++) {
                    arrRes.push(fn(arr[i]));
              }
              return arrRes;
      }
    
      function calculateAge(el) {
              return 2018 - el;
      }
      var ages = arrayCalc(years, calculateAge);
    
      console.log(ages);
    
    - Functions that return functions. 
      function interviewQuestion(job) {
         if (job === 'designer') {
            return function(name) {
               console.log(name + ' explain UX design')
            }
         } else {
              return function (name) {
                console.log('What do you do ' + name)
              }
           }
      }
      var designerQuestions = interviewQuestion('designer');
    
      designerQuestions('Kang');
      interviewQuestion('driver')('Sandeep');
      //Kang explain UX design
      //What do you do Sandeep
    ```

    

    ##Function Hoisting

We can call a function before it’s declaration. But we cannot call it before it’s expression.

```js
calculateAge(1965);
function calculateAge(year) {
console.log(2016 - year);
}//51

calculateAge(1965);
var calculateAge = function (year) {
console.log(2016 - year);
}//Uncaught TypeError: calculateAge is not a function.
```


## IFFE
- Immidiately invoked function expressions

- function that runs as soon as it is defined.

- To make my code private so that it doesn’t interfere with other programmer’s code. 

    ```js
    (function() {
            statements
    })();
    ```


## Closures

```js
function interviewQuestion(job) {
        var a = ' explain UX design'
        var b = 'What do you do '
        return function(name) {
                if (job === 'designer') {
                        console.log(name + a)
                }else {
                        console.log(b + name)
                }
        }
}
 interviewQuestion('pornstar')('Mia Khalifa')
 //What do you do Mia Khalifa
```
- The closure has three scope chains: own scope, outer function’s variable, global variables.
- The `inner` function has always access to the variables and parameters of its outer function, even after the outer function has returned.
## Call,Bind and Apply methods

— We use call to borrow methods from other objects.
— The first argument is ‘this’ value on which the function is invoked upon.
— The rest of parameters are the arguments of the actual function.


- Call:-- 
    john.presentation.call(emily, 'friendly', 'afternoon');


- Apply:-- 

   Similar to call but it accepts arguments as an arrays.

    john.presentation.call(emily, ['friendly', 'afternoon']);


- Bind:--

— method similar to call().  However, this method does not immediately call a function,  but it creates a copy of it.
— We can store it somewhere, for example in a variable. 
— It can be useful for creating functions with pre-set arguments  (Currying method).
— can also be useful when the function needs to be called later in certain events.

# Scope

*scope* refers to the visibility of variables. Variables which are defined outside of a function block have *Global* scope. This means, they can be seen everywhere in your JavaScript code.

```js
var a = "HEllo!";
first();

function first() {
  var b = "Hi!";
  second();
  
  function second() {
    var c = "Hey!";
    console.log(a + b + c);
    }
} // Hello! Hi! Hey!
```

N.B-- Scope only operates **inside-out.**

## Block 
- **Blocks** are statements that exist within curly braces `{}`.

Best practice

## Block Scope

refers to the context within which variables that are accessible only within the block they are defined. ( function())

## Global Scope
- **Global scope** refers to the context within which variables are accessible to every part of the program.
## Local Variables
- **Local variables** are variables that exist within block scope.
## Scope Pollution:dash:
- **Scope pollution** is when too many variables exist in a namespace or variable names are reused.

N.B--- While it's important to know what global scope is, it's best practice to not define variables in the global scope.


# Arrays

N.B-- We can use functions inside an array.

```js
*** Array is also an object*****
To prove this,
var x = [a,b,c];
x
<--(3) [2, 4, 6]
0: 2
1: 4
2: 6
length: 3
__proto__: Array(0)
```

Arrays are lists that store data in JavaScript.

![Array Example](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-arrays/array+literal.svg)

## Accessing Elements
- **Arrays in JavaScript are** ***zero-indexed*****,** 
  ![Diagram outlining how to access the property of an array using the index of the element](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-arrays/array+indices.svg)

- You can also access individual characters in a string using bracket notation and the index. 
    const hello = 'Hello World';
    console.log(hello[6]);
    // Output: W

**N.B**-- the index of the last element of an array is equivalent to the length of that array minus 1.

## Update Elements
```js
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
```


## Nested array
```js
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
```

**N.B---** If we wanted to access the elements within the nested array we can *chain*, 

```js
console.log(nestedArr\[1\][0]); // Output: 2
```
# Methods

Methods are actions we can perform.

```js
Example--- .log
console.log('hello'.toUpperCase());
//prints 'HELLO'
console.log('Hey'.startWith('H'));
//prints true
```
## .push()

Allows us to add items to the end of an array.

```js
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
```


## .pop()
****
**Removes the last item of an array.**

```js
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
```


## .shift()

The **shift()** method removes the **first** element from an array and returns that removed element. This method changes the length of the array.


## .unshift()

The **unshift()** method adds one or more elements to the beginning of an array and returns the new length of the array.

    const groceryList = ['orange juice', 'bananas', 'coffee beans']
    groceryList.unshift('popcorn');
    //['popcorn','orange juice', 'bananas', 'coffee beans']


## .concat()

Used to concatenate two arrays

    arr1.concat(arr2);
## .repeat ( )

method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

```js
'abc'.repeat(2)     // 'abcabc'
```

## .slice( )

- We can use slice method on strings and arrays.

- The **slice()** method returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included). The original array will not be modified.
  
    ```js
    var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    var citrus = fruits.slice(1, 3);
    // citrus contains ['Orange','Lemon']
    ```
    
    We can also make a copy of an entire array. 


## .splice( )

The **splice( )** method changes the contents of an array by removing existing elements and/or adding new elements.

```js
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']
              OR
              
months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
             OR
 var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
```

## .indexof( )

Method returns the position of the first occurrence of a specified value in a array.
**Returns -1 if the value is not found.**

```js
var john = ['John','teacher','1990']

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
//'John is not a designer'

// We can use it to check if desired element is present in a given array.
const mutants = ['Professor X', 'Cyclops', 'Beast', 'Jean Grey'];

mutants.indexOf('Beast'); // 2

if (mutants.indexOf('Beast') > -1) {
  console.log('Beast is X-Men team member');
}
```


## .replace()

This method can replace the words in string with the new words.

```js
// Replace kebab string to case version
function kebabToSnake(str){
  var result = str.replace(/-/g , "_");
  return result;
}
```

## setTimeout()

This method call a function or evaluates an expression after a specified no. of milliseconds. It accepts a function and time value in ms.

```js
var myVar;

function myFunction() {
  myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}
```

## charCodeAt( )

method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

```js
var word = 'quick';
console.log(word.charCodeAt(0) + word.charAt(0))
//113 q
```



## .length

Method used to check the length of an array, string and no. of arguments passed into a function.

## split( )

Method split a string into array.

```js
var str = 'The quick brown fox jumps' ;

var words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

txt.split(" "); // Split on spaces

* If the separator is omitted, the returned array will contain the whole string in index [0].
* If the separator is "", the returned array will be an array of single characters:
```



## setInterval()

This method gonna execute given function/s in given time interval. It also accepts time and a function.

## Destructuring arrays(ES6)

*Destructuring assignment* is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes they are more convenient.

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
In other case:
To get value at any index
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```
## Spread operator(ES6)

Add the elements of existing array into a new array.

    var petNames = ["mandy", "sheru", "annie"]
    var catNames = ["billi", "maano", ...petNames, "cat"]
    console.log(catNames);
    //["billi", "maano","mandy", "sheru", "annie", "cat"]
- We can also concatenate using this.
    petNames = [...petNames, ...catNames];
- We can also copy arrays
    var arr2 = [...arr1];
    
## Rest operator

In array destructuring, if we want to collect the rest of the elements into a seperate array.

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```


# Iterators
## .forEach Method

This method will execute the same function **on each elements of an array.**

- It doesnot chage the array.

N.B-- * The return value for `.forEach()` will always be `undefined`

- This method only work on real arrays whereas for and while loop can iterate anything.
https://www.youtube.com/watch?v=159EAISAxwg&

[https://youtu.be/159EAISAxwg](https://youtu.be/159EAISAxwg)

![](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-iterators/iterator+anatomy.svg)

## .map() Method

This method is similar to .forEach , the major difference is that .map returns a new array with updated elements.


```js
const numbers = [1, 2, 3, 4, 5]; 
const bigNumbers = numbers.map((number) => {
  return number * 10;
});
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```


## .filter() Method

Like .map method, this method also returns a new array however this method filter out certain elements from the original array that are true to condition.

```js
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter((word) => {
  return word.length < 6;
});
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
```


## .findIndex() Method

This method is used to find the location of an element(first occurance) in an array.
**N.B--** It returns `-1` if none of the elements in the array satisfies the condition.

```js
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const startsWithS = animals.findIndex(anime => anime[0]==='s')
//3
```


## .reduce() Method

Tihs method returns a **single value** after iterating through the elements of an array. 

```js
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(summedNums) // Output: 17
```


## .some() Method

This method tests whether **at least one element** in the array passes the test implemented by the provided function.

- Returns a Boolean value.


```js
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;
}));//true
```


## .every() Method

Opposite to .some() Method and check if every element satisfy the condition inside the function.

```js
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

# Loops

“same code sarea te apply krna”
A loop is a programming tool that repeats(iterate) a set of instructions until a specific condition, called a stopping condition is reached.

## For loop
```js
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
counter, which is initialized with a certain value (Starting point)
An exit condition, which is the criteria under which the loop stops.
An iterator, which generally increments the counter by a small amount on each successive loop, until it reaches the exit condition. 
```

**N.B**-- When we use `i` to iterate through arrays we can think of it as being short-hand for the word **i**ndex. For eg.

```js
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}; // output:Grizzly Bear     Sloth       Sea Lion
```


- The syntax of a `for` loop is ideal when we know how many times the loop should run.


## While Loop
-  In situations when we want a loop to execute an undetermined number of times, `while` loops are the best choice. For eg. you'll eat `while` you're hungry. 
   
    ```js
    // A while loop that prints 1, 2, and 3
    let counterTwo = 1;
    while (counterTwo < 4) {
      console.log(counterTwo);
      counterTwo++;
    }
    ```


## Do…While Loop

A `do...while` statement says to do a task once and then keep doing it until a specified condition is no longer met.

```js
let cupsOfSugarNeeded = 2;
let cupsAdded = 0;
do{
  cupsAdded++
}while(cupsAdded < cupsOfSugarNeeded);
```



## For...of loop

```js
let gagan = ['smart','respectful','honest'];

for(let qualities of gagan){
	console.log(qualities);
}
```

## The break Keyword

Imagine we're looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don't want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn't been met, we can use the keyword `break`.

```js
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
} //output : Banana.
             Banana.
             Banana.
```


## The Continue keyword
```js
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
// john smith designer blue 
```
# Objects
- Objects store collections of *key-value* pairs.
- Objects are mutable.
- They don’t have any order.
- ![](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-objects/objectliteraldiagram.svg)


N.B-- We need to use quotation marks if we have **space** in our property name(key).

## Accessing Properties
```js
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
```


## Bracket Notation

We **must** use Bracket Notation **if**

-  we have **space** in our property name.
- The property starts with a number.
    let spaceship = {
      'Fuel Type': 'Turbo Fuel',
      'Active Duty': true,
    };
    spaceship['Active Duty'];   // Returns true


## Property Assignment
![](https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-objects/object+update+property.svg)

- By doing this, we can replace the previous held value .
- Or we can add a new property.
## Delete operator
```js
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
delete spaceship.mission;  // Removes the mission property
```


## Destructuring objects(es6)
```js
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
const { x, y, z } = voxel; 
// x = 3.6, y = 7.4, z = 6.54
In other case
const { x : a, y : b, z : c } = voxel 
// a = 3.6, b = 7.4, c = 6.54
```


- We can also use the same method for nested objects.
    const num = {
      start: { x: 5, y: 6},
      end: { x: 6, y: -9 }
    };
    const { start : { x: a, y: b }} = num;
    console.log(a, b); // 5, 6
## Methods
- When the data stored on an object is a function we call that a *method*. 
- A property is what an object has, while a method is what an object does.


```js
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  }
  ,takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat()
alienShip.takeOff()
```
## Testing Objects for keys
```js
let user =  { name:  "John", age:  30  }; 
 alert(  "age"  in user );  // true, user.age exists 
 alert(  "blabla"  in user );  // false, user.blabla doesn't exist

alert( user.noSuchProperty === undefined ); // true means "no such property"
```

## Testing Objects for Properties
    objName.hasOwnProperty(propname)
    //true  or false
    
## Nested Objects
- An object might have another object as a property which in turn could have a property that's an array of even more objects.
- We can chain operators to access nested properties. 


```js
let spaceship = {
  passengers: [{name:'John'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship.crew.captain\['favorite foods'\][0];
let firstPassenger = spaceship.passengers[0];
```


## Pass By Reference
```js
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'
```

Our function `paintIt()` permanently changed the color of our `spaceship` object. However, reassignment of the `spaceship`variable wouldn't work in the same way:


## For….in Loop 
  ```js 
   for  (key in object)  {  // executes the body for each key among object properties  }
   
let user =  {
 name:  "John",
 age:  30,
  isAdmin:  true  
  };  
  
for  (let key in user)  {  
// keys 
 alert( key );  // name, age, isAdmin  
 // values for the keys 
  alert( user[key] );  // John, 30, true  }
```
## “This” Keyword
- ‘this’ keyword always points to the global object except when we use ‘new’ keyword.
- This keyword only assigns a value when a method calls an object.
- We cannot use this keyword in the regular function expression.


## Math.random()

Pick a random number between 0 and 1
To pick a random no. between 0 and n,

```js
Math.random * n
```


- To pick **random array element**

```js
var random = array[Math.floor(Math.random() * array.length)]
```

* To pick random number between 0 and 10.

```js
Math.floor(Math.random() * 10) + 1;
```



## Math.floor()

To chop off the decimal.

## Math.pow()

This function returns the base to exponent power.

```js
console.log(Math.pow(4, 2));
//16
```

## Math.max()
```js
const arr = [6, 89, 3, 45];
Math.max(...arr);
//89
```
### Generate Whole Number within Range

    function randomRange (min,max) {
    Math.floor(Math.random() * (max-min+1) + min)
    };
# DOM Manipulation


## Select Methods
```js
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelector() {returns the first Element within the document that matches the specified selector, or group of selectors.}
- document.querySelectorAll()
```
## Manipulation Method
- Style property
    let tag = document.getElementById(“highlight”);
    tag.style.color = "blue";
    tag.style.border = "10px solid red";
- An Alternative
****
**Seperation of concerns.**
Define a CSS class, then toggle it on or off with JS.

Separation of concerns means organising code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

## **classList.add/remove/toggle**
```js
In CSS;
.big {
  font-size: 100px;
  color: orange;
  border: 5px solid red;
}
In JS;
let p = document.querySelector("p");
p.classList.add("big");

Toggle class
dice.classList.toggle("toggleDisplay")
```


## Manipulating text and content.
- **textContent**

Returns a string of all the text contained in a given element.

```js
<p>
  This is an <strong>awesome</strong> paragraph 
</p>
JS
var tag = document.querySelector("p");
tag.textContent //"This is an awesome paragraph"
tag.textContent = "blah blah blah";
```


- **innerHTML**

Returns a string of all the HTML contained in a given element

```js
<p>
  This is an <strong>awesome</strong> paragraph 
</p>
JS
//Select the <p> tag:
var tag = document.querySelector("p");
tag.innerHTML
//"This is an <strong>awesome</strong> paragraph"
```
## Document .createElement

→ TO create new element.

## Manipulating attributes
- getAttribute();-----read attribute.
- setAttribute(,);-----write attribute.
```js
    <a href="www.google.com">I am a link</a>
    JS
    var link = document.querySelector("a");
    link.getAttribute("href");  //"www.google.com"
    //CHANGE HREF ATTRIBUTE
    link.setAttribute("href","www.dogs.com"); 
    ///<a href="www.dogs.com">I am a link</a>
```
## **DOM Events**

**We select an element and then add an event listener.**

 **eg.** "Listen for a click on this `<button>`"
        "Listen for a hover event on the **h1**"

To add a listener, we use a method called:
```js
element.addEventListener(type, functionToCall);

```


```js
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```

Some example of events:
click, mouseover, dblclick, keypress, drag

## onclick 
```js
<button onclick="displayDate()"> 
  Check Date 
</button>

<script>
  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
</script>

<p id="demo"></p>
```

## onChange

When I change something on input field.

## Reload page 

    button.addEventListener("click", function() {
     window.location.reload();
     });


## "Change" event
```js
button.addEventListener("change", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```

## "input" event

```js
event listens to the change in the input field.
```



## Keydown

Trigger event when a keyboard key is pressed.

```js
let toDo = document.querySelector(".toDo");
toDo.addEventListener("keydown", function() {
      if(event.keyCode === 13) {
            alert("bum")
       }
})
```


## parentNode

→ To do something with the parent of a child element.

    // remove the todo after hitting <span>.
    var spans = document.querySelectorAll("span");
    for (var i = 0; i < spans.length; i++) {
            spans[i].addEventListener("click", function(){
                    this.parentNode.remove()
            })
    }


## appendChild

→ To join parent with their current or future child.

```js
input.addEventListener("keydown", function(){
    if (event.keyCode === 13) {
        var val = this.value;
        var ul = document.querySelector("ul");
       newItem = document.createElement("li");
       newItem.textContent = val;
       ul.appendChild(newItem)
   }
})
```
#                               OOP
## Constructors
- Functions that creates an object.

- A constructor is useful when you want to create multiple similar objects with the same properties and methods.

- Constructor acts like a blueprint and used to create **instances** (objects).

- Start with a **capital letter.**

- **N.B--** Constructor’s prototype property is NOT the prototype of the constructor itself but it’s the prototype of all the instances that are created through it.

  ```js
  var Book = function(title,author,pages,haveRead) {
  	this.title = title;
  	this.author = author;
  	this.pages = pages;
  	this.haveRead = haveRead;
  	this.info = function() {
  		return this.title + ' by ' + this.author + ' , ' + this.pages + ' , ' + this.haveRead;
  	}
  }
  
  var hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false);
  console.log(hobbit.info ())
  ```

  * Learn more : https://css-tricks.com/understanding-javascript-constructors/
## Class(ES6)

This is a another method of creating constructor function.

### Class declaration

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

* difference between **function declarations** and **class declarations** is that function declarations are Hoisted and class declarations are not.

### Class expression

```js
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

* Their must be only one custructor method per class.





## ‘New’ Operator

- When we use ‘new ’ operator, first a brand new empty object is created.
- After that the constructor function is called with the arguments we specified.
- ‘new’ operator points the ‘this’ variable not to the global object but to the new empty object that was created in the beginning.
- Finally it adds ‘return this’ to the end of the function.


```js
// First creates an Constructor function.
var Person = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
}
// Make instance of Person Object.
var john = new Person('john', 1990, 'teacher');

//Make a prototype property of Person object.
Person.prototype.calculateAge = 
function() {
   console.log(2016 - this.yearOfBirth);
 }
 
 //Test if it works.
 john.calculateAge();
// check console
  26
```


## Prototype Property
- **Dictionary meaning--** a first, typical or preliminary model of something, especially a machine, from which other forms are developed or copied.
- Prototype property of an object is simply a reference to another object.
- As prototype object is an object, we can attach properties and methods to the prototype object. Thus, enabling all the objects created using the constructor function to share those properties and methods.
## Inheritance

One object can inherit the properties and methods from other object.

- inheritance works by using prototype property.
- Prototype chain make it possible.
- **Prototype Chain:** When a certain method is called, the search starts in the object itself, and if it cannot be found , the search moves on to the object’s prototype. This continues until the method is found.
## instanceOf

To check if one object is the instance of another object.

```js
john instanceOf Person
<- true
Person instanceOf Object
<- true
Object instanceOf Object
<-true
```

## Object.create()
The **Object.create()** method creates a new object, using an existing object as the prototype of the newly created object.
```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

## Call Stack

The place where the computer stores a function's context is the call stack. Every time a function is called, the current context is stored on the top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

# Asynchronous JS

It is just like cleaning the house, we carry on cleaning while dishwasher is cleaning dishes and washing machine is cleaning clothes. We don't need to wait for one task to finish to start the another one.

## API call
```js
fetch("https://api.hatchways.io/assessment/students")
    .then(response => response.json())
    .then(data => appendData(data))
    .catch(err => console.log(err));
```

## Promise

Promises are objects that represent the eventual outcome of an asynchronous operation. A `Promise` object can be in one of three states:

- **Pending**: The initial state— the operation has not completed yet.
- **Fulfilled**: The operation has completed successfully and the promise now has a *resolved value*. 
- **Rejected**: The operation has failed and the promise has a reason for the failure. This reason is usually an `Error` of some kind.

```js
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```



## .then( ) method

It just say, “I have a promise, when it settles, **then** here’s what I want to happen…”

It is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as *handlers*. When the promise settles, the appropriate handler will be invoked with that settled value.

- The first handler, sometimes called `onFulfilled`, is a *success handler*, and it should contain the logic for the promise resolving.
- The second handler, sometimes called `onRejected`, is a *failure handler*, and it should contain the logic for the promise rejecting.

```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
```



## .catch( )

The `.catch()` function takes only one argument, `onRejected`. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using `.catch()` accomplishes the same thing as using a `.then()` with only a failure handler.

```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

## Composition

This process of chaining promises together is called *composition*.

```js
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```



### padding a number
```js
let str = "5";  
str = str.padStart(4,0);  
// result is 0005
```
```js
let padToThree = (number) =>(number <= 999 ? `00${number}`.slice(-3):number);
```

## event.preventDefault ( )

To prevent the default form submit behavior which will refresh the web page.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzc5MDkyODcwLDExMzg2ODIxMDAsLTU4Mj
U2MzU4NSwxNTIxNDkxMzU0LC0zNjg5NDQ3NTQsLTE3Mjg2NDkx
MzIsMTU0NzAxNDA1NCw5NjY5OTc4MTcsMTkwODM3MjA2MSw2NT
cwMTc3NTIsLTY4MzI3NDk0NywtOTM2NTQxNTc0LC05MDM2NjY2
NDgsOTI4NjUzNzU3LDc4NzI3NjMyMywtNzc4MjA1MDE5LDUxND
U1MjA3NCwtNzQwOTUwOTg4LC00MTI3OTQ3OTMsMTkwODkyODU0
MV19
-->