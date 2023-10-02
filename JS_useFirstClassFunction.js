/*

                                              we will go through the following points :
|-------------------------------------------------------------------------------------------------------------------|
| 1- what does the term of first class function means ?
| 2- history of first-class functions and how it was introduced ? 
| 3- what does the term of higher-order functions means ?           
| 4- what is the relationship between first-class functions and higher-order functions ?
| 5- pros and cons of using first-class functions 
| 6- your fav part *-* 
|--------------------------------------------------------------------------------------------------------------------|




_____________________________________________________________________________________________________________________________________________________First Part : 

** what does the term of first class function means ?
=> it's a function that can be treated like a value/variable . 
=> this means that it can be assigned to a variable, passed as an argument to another function, or returned from a function.

- I can see that you can't belive me but you have already used it before without knowing that it's called first class function , keep your eyes on the next parts  

_____________________________________________________________________________________________________________________________________________________Second Part : 

** history of first-class functions and how it was introduced ? 

- before we start talking about first class function i'd like to tell you a breif history about it , so let's start 

=> in the mid-1960s one of computer scientist ( Christopher Strachey ) introduced the concept of first-class functions 
=> so we can say that The term "first-class function" was coined by Christopher Strachey 

=> First-class functions were first introduced in the Lisp programming language in the 1950s. Lisp is a functional programming language .
=> First-class functions are ONLY essential for functional programming.

=> Later it was added to other programming languages, such as Haskell. 

                                                            AND THE MERICAL HAPPENED !!!!!!!!!!!!!!!!!!!
=> In the 1990s, first-class functions were added to popular object-oriented programming languages, such as Java and Python.

_____________________________________________________________________________________________________________________________________________________Third Part :

** what does the term of higher-order functions means ? 
=> it's a  function is a function that takes one or more functions as arguments, or returns a function as its result. 
=> In other words, a higher-order function is a function that operates on functions.

let take the map function in JS as an example : 
( map is a method that we use to apply a function to each element in an array, and it returns a new array with the modified elements )
( in our example the function we will apply will add 10 to each element on the array )

|--------------------------------------------------------|
| const arr = [1, 2, 3, 4, 5];
| const output = arr.map((num) => num += 10)
| console.log(output);  ->   [11, 12, 13, 14, 15]
|--------------------------------------------------------|

** function explanation :
1- the callback function that is being passed to map uses the arrow function syntax 
2- it takes a single argument num as a parameter on the callback function
3- function adds 10 to num (every element in the array) 
4- returns the result - > array of nums where each num was added to 10 

_____________________________________________________________________________________________________________________________________________________Fourth Part :

** what is the relationship between first-class functions and higher-order functions ?

- let's a quick recap 

=> we said the following things  :

1- First-class functions are functions that can be treated like values. This means that they can be assigned to variables, passed as arguments to other functions, or returned from functions.
2- Higher-order functions are functions that take other functions as arguments or return functions as results.

___________________________________________READY FOR OUR CONCLUSION ?___________________________________________ 

- all higher-order functions require first-class functions to work. 

- YOUR ARE NOT OKAY WITH THAT RIGHT ?? let me explain this :  

do you remember the map function and the example ???? 

|--------------------------------------------------------|
| const arr = [1, 2, 3, 4, 5];
| const output = arr.map((num) => num += 10)
| console.log(output);  ->   [11, 12, 13, 14, 15]
|--------------------------------------------------------|

1- the map() function took an arrow finction as an arrgument right ? ( so we can say that map function is a higher-order function)
2- the arrow function inside the map() function is a first-class function because it can be treated like a value.
3- without passing the arrow function which represents the logic of the map() function , the map() function will not work


********* SO BACK TO OUR CONCLUSION -> all higher-order functions require first-class functions to work 
=> map function (higher-order function) required the arrow function (first-class function) to work  

_____________________________________________________________________________________________________________________________________________________Fifth Part :

** pros and cons of using first-class functions ? 

1- Pros:

* Code reuse: First-class functions can be reused in different parts of your code, which can make your code more concise and easier to maintain.
* Abstraction: First-class functions can be used to abstract away complex logic into reusable functions. This can make your code more readable and easier to understand.
* Composability: First-class functions can be composed together to create new functions. This can make your code more modular and reusable.
* Expressiveness: First-class functions allow you to express complex algorithms in a concise and elegant way.


2- Cons:

1* Performance: First-class functions can have a slight performance overhead, especially in languages that are not designed specifically for functional programming.
2* Complexity: First-class functions can make code more complex and difficult to understand, especially for programmers who are not familiar with functional programming.
3* Memory usage: First-class functions can increase memory usage, especially if they are used to create large numbers of closure functions.

_____________________________________________________________________________________________________________________________________________________Sixth Part :


** HERE WE GOOOOOOOOOOOOOO !!!!!!!! IT'S YOUR FAV CODING PART  

let's go through some examples to understand first-class functions more :

****************** FIRST EXAMPLE :

- we will create 4 functions and put them iside a variable which will be object and try to use them as a variable OKAY ? 

|------------------------------------------------------------------------------------|
| // this variable (obj ) will hold our functions  
|
| const variableFunction = {
|
|    add: (a, b) => {
|        return `${a} + ${b} = ${a + b}`;
|    },
|
|    subtract: (a, b) => {
|        return `${a} - ${b} = ${a - b}`
|    },
|
|    multiply: (a, b) => {
|        return `${a} * ${b} = ${a * b}`
|    },
|
|    division: (a, b) => {
|        if (b != 0) return `${a} / ${b} = ${a / b}`;
|        return `Cannot Divide by Zero!!!`;
|    }
| 
| }
| 
| // try to call the functions inside the variable using the variable name 
| console.log(variableFunction.add(100, 100));      -> 100 + 100 = 200
| console.log(variableFunction.subtract(100, 7))    -> 100 - 7 = 93
| console.log(variableFunction.multiply(5, 5))        -> 5 * 5 = 25
| console.log(variableFunction.division(100, 5));    -> 100 / 5 = 20
|------------------------------------------------------------------------------------|


****************** SECOND EXAMPLE :

- we will use a built-in function in JS like map function that we used previously , this time we will use filter() function 

- in this example we will use the filter() function to filter some data in our array of users we have and array of objects and each objects contains a user data 
which is ( userName, lastName, age ) and we want to filter the data so that get all users who are older than 30 years old
( filter function is used to filter data in an array based on a condition/ criteria )


COOL HA ?? LET'S HIT THIS UP !!!!!


|------------------------------------------------------------------------------------|
|
| // this is our array of objects
|
| const users = [
|    {firstName: 'John', lastName: 'Doe', age: 25},
|    {firstName: 'Jane', lastName: 'Doe', age: 30},
|    {firstName: 'Jack', lastName: 'Doe', age: 35},
|    {firstName: 'Jill', lastName: 'Doe', age: 40},
|    {firstName: 'Joe', lastName: 'Doe', age: 45},
| ]
|
| // we will use the filter function to filter the data based on the age
| const newUsers = users.filter((user) => user.age > 30 ) 
|
| // see the result 
| console.log(newUsers);  
|
|    output is : [     
|        {firstName: 'Jane', lastName: 'Doe', age: 30},
|        {firstName: 'Jack', lastName: 'Doe', age: 35},
|        {firstName: 'Jill', lastName: 'Doe', age: 40},
|        {firstName: 'Joe', lastName: 'Doe', age: 45},
|    ]
|    
|------------------------------------------------------------------------------------|


- I FEEL LIKE I WANNA  GIVE YOU MORE EXAMPLES BUT I'M SO HUNGRY SO I WILL LEAVE YOU ALONE WITH THIS EXAMPLES  :(  
- don't forget to search about higher-order functions in JS like ( map, filter, reduce, forEach, find, etc..) , I HOPE YOU ENJOYED IT *-*

IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/

