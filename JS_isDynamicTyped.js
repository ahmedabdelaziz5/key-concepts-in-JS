/*

                                              we will go through the following points :
|-------------------------------------------------------------------------------------------------------------------|
| 1- what does the term of static typing means ?
| 2- what does the term of dynamic typing means ?
| 3- what does it mean when we say that language X is dynamic typed ?   
| 4- some imortant concepts         
| 5- how does Js handles the dynaimc typing under the hood ?
| 6- pros and cons of using dynaimc typing
|--------------------------------------------------------------------------------------------------------------------|



_____________________________________________________________________________________________________________________________________________________First Part : 

**  what does the term of static typing means ?
=> static typing is a programming language feature that requires the types of variables and expressions to be known at compile time.
=> you should specify the type of the variable when you declare it and you can't change it later on

- example of languages that uses static typing : C, C++, Java, C#, etc...

_____________________________________________________________________________________________________________________________________________________Second Part : 


** what does the term of dynamic typing means ?
=> dynamic typing is a programming language feature that allows variables to hold values of any type. 
=> the type of a variable is determined by the value that it holds at runtime, and can change throughout the program as different values are assigned to it

- example of languages that uses dynamic typing : JavaScript, Python, Ruby, PHP, etc...


_____________________________________________________________________________________________________________________________________________________Third Part :


** what does it mean when we say that language X is dynamic typed ? 
=> this means that when you declare a variable you don't need to specify the type of the variable and you can change it later on

IF YOU DON'T UNDERSTAND LET'S GO THROUGH AN EXAMPLE :

- let's assum that you are a cpp programmer and you will write this super easy code : 
|-------------------------------------------------------------------------------------------------------|
|   int main(){
|    int x = 10 ;
|    cout << x << endl ;         ->  output :  10
|    // but suddenly you want to change the value of x to be a boolean value
|   // so you will do this : 
|    x = true ; 
|   cout << x << endl ;          ->  output : Error invalid conversion from 'int to 'bool' [-
|   // if the cpp was a human it would cry in such situation :( 
| }
|-------------------------------------------------------------------------------------------------------|

- so why i can't do this in cpp or java ? because they doesn't support dynamic typing and you should specify the type of the variable when you declare it and you can't change it later on

- on the other side if you are using js and write the previous super easy code : 
|-------------------------------------------------------------------------------------------------------|
| let x = 10  ;
| console.log(x) ;          -> output :  10
| // but suddenly you want to change the value of x to be a boolean value
| // so you will do this :
| x = true ;
| console.log(x) ;             -> output : true
|-------------------------------------------------------------------------------------------------------|

- so why i can do this in js ? because it supports dynamic typing and you don't need to specify the type of the variable when you declare it and you can change it later on



_____________________________________________________________________________________________________________________________________________________Fourth Part :


** some imortant concepts 

- before we know how  js handles the dynaimc typing in the next section we need to know some important concepts 

- we will discuss the following concepts :

1- type consortium :  
=> type consortium is the process of converting one type of data to another. 
=> javaScript automatically performs type coercion in some cases, such as when performing arithmetic operations on values of different types. 

let's go through an example to understand it :
|-----------------------------------------------------------------|
| function add(a, b) {
|  return a + b;
| }
|
| console.log(add(1, 2)); // 3
| console.log(add("hello", " world")); // "hello world"
|-----------------------------------------------------------------|

*** if you noticed that the add function could add two numbers or two strings without any problem and this is because of the type consortium



2- Type checking: 
=> type checking is the process of verifying that a variable or expression has the expected type.

let's go through an example to understand it :
|------------------------------------------------------------------------------------------------------------------------------------------------------|
|
| function add(a: number, b: number): number {
|  return a + b;
| }
|
| console.log(add(1, 2));                          output ->  3
| console.log(add("hello", " world"));      output ->  Error: Argument of type 'string' is not assignable to parameter of type 'number'.
|------------------------------------------------------------------------------------------------------------------------------------------------------|

*** if you noticed that the add function could add two numbers but in the case of using two strings the compiler will throw an error and this is because of the type checking


3- Duck typing :
=> duck typing is a programming paradigm that states that the type of an object is determined by its behavior, rather than its declared type. 
=> the type of a variable is not known until runtime. This makes duck typing a powerful tool for writing flexible and reusable code.

- DON'T WORRY IF YOU DIDN'T UNDERSTAND THE PREVIOUS DEFINITION I CAN'T UNDERSTAND IT TOO 

- let's go through an example to understand it :
|--------------------------------------------------------------------------------------|
| function quack(obj) {
|  if (obj.quack)  obj.quack();
| else console.log("I can't quack!");
| }
|
| const duck = {
|     quack() {
|    console.log("Quack!");
|  },
| }
|
| const car = {
|     drive() {
|    console.log("accelerating");
|  },
| }
|
| quack(duck);       output ->  Quack!
| quack(car);          output -> I can't quack!
--------------------------------------------------------------------------------------|

I THINK BEING A DUCK CAN SOLVE MANY PROBLEMS IN OUR LIFE  :) 


_____________________________________________________________________________________________________________________________________________________Fifth Part :


** how does Js handles the dynaimc typing under the hood ?

- after learning the previous concepts we can now discuss how js handles the dynaimc typing  *-*

*** i will expalin to you how js do that with these steps , KEEP YOUR EYES ON : 

1- js use a technique called hidden classes ( Hidden classes are internal data structures that are used to store the type information for JavaScript objects ) .

2- when a new object is created in JavaScript, the JavaScript engine creates a hidden class for that object. 
( hidden class stores the type information for the object, such as the names and types of the object's properties ) 

3- the JavaScript engine uses the hidden classes and cach to determine the type of a variable at runtime. 

let's go through an example to understand it :
|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1* assum that we declared this a variable called x and assigned it a value of 10   ( memory has : x = 10 )
| 2* when a new variable/object  is created, the JavaScript engine creates a hidden class for the object. 
| 3* the hidden class stores the type information for the object, such as the names and types of the object's properties.
| 4* the Js engine maintains a cache of hidden classes. 
| 5* assum that we created another variable called y and assigned it a value of 20 , ( memory has : x = 10 , y = 20 )
| 6* the Js engine checks the cache to see if there is an existing hidden class that matches the type of the object. 
| 7* If there is, the Js engine reuses the existing hidden class. Otherwise, the JavaScript engine creates a new hidden class for the object.
| 8* When a variable is assigned a value, the JavaScript engine checks the hidden class of the value to determine its type. 
| 9* The JavaScript engine then uses the type information to perform the necessary operations, such as type coercion 
|--------------------------------------------------------------------------------------------------------------------------------------------------------|

- and now you wonder now what is the importance of the previous concepts ? ( type consortium , type checking , duck typing )
- i will tell you , the Js engine uses the previous concepts to determine the type of a variable which stored in the hidden classes at runtim.

___________________________________COCLUSION_____________________________________________________

1- ( type consortium , type checking , duck typing ) allows us to write dynamic code in JavaScript.
2- hidden classes are used to implement ( type consortium , type checking , duck typing ) in JavaScript as it is the data structure that stores the type information for our Js objects.


_____________________________________________________________________________________________________________________________________________________Sixth Part :


** pros and cons of using dynaimc typing ? 

1- Pros:

* Flexibility: Dynamic typing makes JavaScript code more flexible and reusable, because you can write functions and modules that can be used with any type of data.
* Rapid development: Dynamic typing can make it faster to develop code, because you do not need to declare the types of variables and expressions.
* Expressiveness: Dynamic typing can make code more expressive, because you can write code that is more concise and readable.

2- Cons:

* Errors: Dynamic typing can lead to errors, because the type of a variable is not known until runtime. This can make it difficult to debug code and to prevent bugs.
* Performance: Dynamic typing can make code less performant, because the compiler cannot optimize code as effectively without knowing the types of variables and expressions.


IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/

