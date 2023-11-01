/*

                            we will go through the following points :
|----------------------------------------------------------------------------------------|
| 1- what is stack overflow ? 
| 2- what is scope scope 
| 3- function scope vs block scope
| 4- what is scope chain ?
| 5- arrow functions and scope chain
| 6- "this" keyword 
|----------------------------------------------------------------------------------------|


______________________________________________________________________________________________________________________________________________________First Part : 

** what is stack overflow ?

- remember the call stack and execution context ? 
- when we call a function we create a new excution context and push it to the call stack RIGHT ? 

- so what if we have a function that calls itself ?

-Let's see an example :
|----------------------------------------|
| function pleaseCallMe(x) {
|      pleaseCallMe(x);
| }
|
| pleaseCallMe(1);
|----------------------------------------|

- what do you think ? 
=> first of all we will create a new execution context and push it to the call stack
=> we will go through the function line by line and excute it
=> the fucntion will call itself again and we will create a new execution context and push it to the call stack
=> we will go through the function line by line and excute it
=> the fucntion will call itself again and we will create a new execution context and push it to the call stack
=> do you see anything wrong here ? the function is calling itself infinite times and we will create infinite execution contexts in call stack
=> this will cause a stack overflow which means that call stack is full and we can't push any more execution contexts to it

- so we can say that stack overflow is when the stack is full and we can't push any more execution contexts to it !!!!! 

_________________________NOTES_________________________

1- the above code uses a technique called recursion which is a function that calls itself
2- we can use recursion to solve some problems like factorial , fibonacci also applying some algorithms like binary search and dynamic programming
3- to use recursion without getting a stack overflow we need to have a base case 
4- the base case is the case that will stop the recursion

let's take another look on the same code with a base case :
|------------------------------------------------------------------|
| function pleaseCallMe(x) {
|      if(x === 0) return;
|      console.log(`this is the recursive call number:  ${x}`);
|      pleaseCallMe(x-1);
| }
|
| pleaseCallMe(10);
|------------------------------------------------------------------|

=> try the output of the above code in the console and see what will happen *_*
=> the above code has a condition that will stop the recursion when x is equal to 0
=> so we will not have a stack overflow because we will not have infinite execution contexts in the call stack

______________________________________________________________________________________________________________________________________________________Second Part : 

** what is scope scope 

- if you don't know what is scope don't worry i will explain it . 
=> scope is the area where you can access a variable or a function

example: 
|-------------------------------------------------------------------------------|
| function pleaseCallMe(y) {
|      var y = 10;   // you can access the variable y only inside the function 
| }
|
| console.log(y);    // output  : ReferenceError: y is not defined
|-------------------------------------------------------------------------------|

- if you notice the above code we have a function that takes a parameter y and inside the function we have a variable y
- but the variable y inside the function which means that it has a local scope ( for the function only )
- the function only has access to the variable y inside it and not the variable y outside it 
- so the output of the above code will be a reference error because the function doesn't have access to the variable y outside it
- this is what we call it as a scope !!!!!!

- so what we don't know about scope ? 
- we know that there is a local scope and a global scope but there is another scope that we don't know about it ? 
- the answer is yes there is another types of scope like block scope and function scope
=> what is the difference between them ? 
=> which one deos Js use ? 

- follow me to the next part to know the answer :)

______________________________________________________________________________________________________________________________________________________Third Part : 

** function scope vs block scope

1- Function scope:  
* when a variable is declared inside a function, and is only accessible within that function. 
* It is not accessible outside of the function.
* the previous example is an example of function scope ( we couldn't access the variable y outside the function )


2- Block scope:
* when a variable is declared inside a block of code, and is only accessible within that block of code. 
* It is not accessible outside of the block of code.

- and here is your question : what is a block of code ?
=> block of code in JavaScript is a group of statements that are executed together. 
=> blocks of code are typically enclosed in curly braces { } 

- UMMMMMMMM , we can say that a block of code is any piece of code that is surrounded by curly braces {} ???? 
- YEEEEEEES !!!!! anythig that is surrounded by curly braces is a block of code

let's see an example :
|-------------------------------------------------------------------------------|
| if (condition) {      // start of block
|
|    // Statements to be executed if the condition is true
|   // any code will be here is a block of code
|
| }      // end of block
|
|-------------------------------------------------------------------------------|


** which one deos Js use ?
- we know that Js is not a normal language and it has some weird things
- so i can say that Js uses both function scope and block scope

- Js do the following :
1- Variables declared with the var keyword are function scope, 
2- variables declared with the let and const keywords are block scope.

let's see an example :
|-------------------------------------------------------------------------------|
| if(condition){
|   var x = 10;   // function scope   
| }
|
| console.log(x);   // output : 10
|-------------------------------------------------------------------------------|
- in the above code we have a variable x that is declared inside a block of code ( if statement )
- but we can access the variable x outside the block of code because it is declared with the "var" keyword 
- what if we declared the variable x with the "let" or "const" keywords ? -> the output will be : ReferenceError: x is not defined
=> as a result we can say that block scope is only for the variables that are declared with the "let" or "const" keywords

______________________________CONCLUSION______________________________

1- there are 2 types of scope : function scope and block scope
2- Js uses both function scope and block scope
3- let and const keywords are block scope ( can only access the variable inside the block of code )
4- var keyword is function scope ( can only access the variable inside the function )


______________________________________________________________________________________________________________________________________________________Fourth Part : 

** what is scope chain ?

- do you remember the execution context ? 
- we said that every execution context has 3 components :
1- variable environment
2- scope chain
3- this keyword

- we will talk about the scope chain in this part which is the second component of the execution context
- the scope chain is a list of all the variables that the function has access to
- YOU DON'T UNDERSTAND ? okay let's see an example :

|---------------------------------------------------------------------------------------------------------------------------|
| function parent() {
|
|       var x = 10;
|
|       function child1() { 
|            var y = 20;
|            // scope chain has only access to the variable x which was declared in the parent function
|            // and variable y which was declared in the child1 function
|       }
|       
|       function child2() {
|            // scope chain has only access to the variable x which was declared in the parent function
|           console.log(x);
|           console.log(y);   // ReferenceError: y is not defined   
|       }      
|
|       child2();
|   }
|
|   parent();
|---------------------------------------------------------------------------------------------------------------------------|



=> in the aboce code we have a function that is called parent and inside it we have another functions that is called child1 and child2 
=> and inside the parent function we have a variable which is called x
=> we know that when we call any function we create a new execution context and push it to the call stack to excute it
=> and each execution context has a scope chain (which is a list of all the variables that the function has access to)
=> so simply the scope chain of child1 has the variable x which was declared in the parent function !!!! 
=> and the scope chain of child2 has the variable x which was declared in the parent function !!!!
=> what if we created a variable y inside the child1 function and tried to access it inside the child2 function ?
=> the answer is we can't access it because the scope chain of child2 has only the variable x which was declared in the parent function !!!!
=> it is something like inheritance in OOP , childs can only access the variables that are declared in the parent class 
=> here in the scope chain is the same ( any scope chain that is created in a child function has the variables that are declared in the parent function )


______________________________CONCLUSION______________________________

1- each execution context has a scope chain which is a list of all the variables that the function has access to
2- the scope chain of a child function has the variables that are declared in the parent function
3- the scope chain of a child function has no access to the variables that are declared in the other child function (even if they are in the same parent function)
4- call stack doesn't care about the relationship between the functions ( parent and child ) it only cares about the order of the functions that are called
5- all relationships between the functions are handled by the scope chain which is created to each execution context 
5- there are 2 main types of scope chain : lexical scope and dynamic scope 
6- Js uses lexical scope which means that the scope is defined where the code is written ( not where the code is called )
|
|___> example :
|---------------------------------------------------------------------------------------------------------------------------|
| function parent() {
|
|       var x = 10;
|
|       function child1() { 
|            var y = 20;
|            // scope chain has only access to the variable x which was declared in the parent function
|            // and variable y which was declared in the child1 function
|       }
|       
|       function child2(child1) {
|            // scope chain has only access to the variable x which was declared in the parent function
|           console.log(x);
|           console.log(y);   // ReferenceError: y is not defined   
|           child1();         // we can call child1 but we can't access the variable y which was declared inside it
|       }      
|
|       child2(child1);
|   }
|
|   parent();
|---------------------------------------------------------------------------------------------------------------------------|
- in the above code the function child2 takes a parameter which is the function child1
- and inside the function child2 we call the function child1 and try to access the variable y which was declared inside the function child1
- as we said in the lexical scope the scope is defined where the code is written ( not where the code is called )
- so we can call the child1 from child2 but we can't access the variable y which was declared inside the function child1


______________________________________________________________________________________________________________________________________________________Fifth Part : 

** arrrow functions and scope chain


______________________________________________________________________________________________________________________________________________________Sixth Part : 

** "this" keyword














IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)


node callStack_executionContext_pert2.js

*/


