/*

                            we will go through the following points :
|----------------------------------------------------------------------------------------|
| 1- what is variable environment ? what is it's components ?
| 3- what is hoisting ? 
| 4- hiositng with varibales 
| 5- hiositng with functions 
| 6- arguments object / reset parameters
| 7- scope chain
|----------------------------------------------------------------------------------------|


______________________________________________________________________________________________________________________________________________________First Part : 

** what is variable environment ?

=> it is a set of rules that determine how variables are resolved and accessed.
=> we can say that variable environment is our memory space for each execution context.
=> and do not forget  It is a component of the execution context, which is the environment in which a piece of JavaScript code is executed.

what is it's components ?

=> variables : store the variables 
=> functions :  store any block of code that we can call later
=> argument object : has all the arguments that we passed to the function

IN OTHER WORDS :

=> do you remember the phases of creating an execution context ?
=> it was 2 phases (creation phase and execution phase)
=> at the first phase we were looking for any variables and functions to put them in our execution context
=> and as we said the variable environment is a component where we store our variables and functions
=> so we can say that we store our variables and functions inside the variable environment which is a component of the execution context

______________________________________________________________________________________________________________________________________________________Second Part : 

** what is hoisting ?

=> simply it is the process of using variables and functions before declaring them

do you see the following code ? 
|-----------------------------------|
| console.log(myName);
| var myName = "ahmed";
|
| output : undefined
|-----------------------------------|

=> we are using the variable myName before declaring it , this is the hoisting
=> but how does it work ?
=> do you remember the phases of creating an execution context ?
=> we were looking for any variables and functions to put them in our execution context
=> so in the previous code we will find the variable myName but it in our stack (variable environment) and it will be equal to undefined
=> callStack : [myName = undefined]
=> and then we will go to the execution phase and we will find the console.log(myName) so it will print undefined 
=> after that we will find the declaration of the variable myName = "ahmed" so our vaiable will be "ahmed" instead of undefined
=> callStack : [myName = "ahmed"]
=> and as you can see the variable myName was hoisted (used before declaring it) and we used it when it was equal to undefined


let take an example in other programsing languages like c++ 
|-------------------------------------------------------------|
| int main(){
|  cout << myName << endl;
|  string myName = "ahmed"; 
| }
|
| output : ERROR : Use of undeclared identifier 'name'
|-------------------------------------------------------------|

=> so we can say that if you are a lucky guy and you are using javascript you can use variables and functions before declaring them
=> but if you are using other programming languages you will get an error for making such a thing

- DOES HOISTING WORKS WITH ANY TYPE OF VARIABLES AND FUNCTIONS ? 
=> of course not , every type of variable and function has it's own way of hoisting , let's see them

______________________________________________________________________________________________________________________________________________________Third Part : 

** hiositng with varibales

=> we can divide hiositng with varibales into 2 types ( varibales declared with "var" keyword , varibales declared with "let" and "const" keyword )

1- "var" keyword : 

=> let's declare a variable with "var" keyword and try to use it before declaring it
- see the following code :
|----------------------------------------|
| console.log(myName);
| var myName = "ahmed";
|
| output : undefined
|----------------------------------------|
=> as we said before the variable myName will be hoisted and it will be equal to undefined 
=> because we executed the console.log(myName) before declaring the variable myName


2- "let" and "const" keyword :
- let'suse the same code but with "let" or "const" keyword instead of "var" keyword
|-------------------------------------------------------------------------------------|
| console.log(myName);
| let myName = "ahmed";  
|
| output : ReferenceError: Cannot access 'myName' before initialization
|-------------------------------------------------------------------------------------|

- BUT WHY , JS ALLOWES US TO USE VARIABLES BEFORE DECLARING THEM RIGHT ?
- yes it allowed us to use variables before declaring them but with "var" keyword only
- because "let" and "const" keywords are part of ES6 which allows us to use variables as we use them in other programming languages
- remember the example that we took in the previous part with c++ language ? "let" and "const" force you to declare the variable before using it 
- so we can say that "let" and "const" are a very good try to make javascript like other programming languages


- DOES THE "let" AND "const" KEYWORDS HIOSTED ? -> the answer is YES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
- you are confused now right ? how it could be hoisted if it is not allowed to use it before declaring it ?
- okay, i will prove it to you , let's see the following code :
|-------------------------------------------------------------------------------------|
| console.log(myHobby);
| let myName = "ahmed";  
|
| output : ReferenceError: myHobby is not defined
|-------------------------------------------------------------------------------------|

- as you can see we don't have any variable called myHobby
- so we got an error because we used the variable myHobby before declaring it
- but the error message is "ReferenceError: myHobby is not defined" not "ReferenceError: Cannot access 'myHobby' before initialization"
- go back to the previous part and see the error message that we got when we used "let" and "const" before declaring them
- the error message was "ReferenceError: Cannot access 'myName' before initialization"
- which means that Js knows that we have a variable called myName but it is not initialized yet
- but in the current example we got "ReferenceError: myHobby is not defined" which means that Js doesn't know anything about the variable myHobby
- so we can say that "let" and "const" are hoisted and Js knows that there is a variable called myName but it is not initialized yet

AMAIZING HA ? :D
______________________________________________________________________________________________________________________________________________________Fourth Part : 

** hiositng with functions 
______________________________________________________________________________________________________________________________________________________Fifth Part : 

** arguments object / reset parameters

______________________________________________________________________________________________________________________________________________________Sixth Part : 

** scope chain 


IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/
