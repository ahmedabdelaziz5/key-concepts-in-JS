/*

                            we will go through the following points :
|----------------------------------------------------------------------------------------|
| 1- what is variable environment ? what is it's components ?
| 2- what is hoisting ? 
| 3- applying hiositng on varibales 
| 4- applying hiositng on functions 
| 5- arguments object / reset parameters
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

=> we can devide hiositng with functions into 2 types ( oridianry functions , arrow functions )

1- oridianry functions :

-what do you think about this code :
|------------------------------------------|
| printName();
|
| function printName(){
| console.log("ahmed");
| }
|
| output : ahmed
|------------------------------------------|

=> you should see that this output is very normal because as we said before :
*- Js will look for any variables and functions to put them in our execution context ( allocation phase )
*- after finishing the allocation phase it will go to the execution phase and execute the code line by line
*- it will excute the function printName() and print "ahmed" as the call stack has a function called printName() 


2- arrow functions :
- let's see the following code : 
|----------------------------------------------|
| console.log(add(5));
|
| var add = num => num + 5;
|
| output : TypeError: add is not a function
|-----------------------------------------------|

- but why ? in the last parts we used functions as a variable and its name was first class fuctions right ?
- yes you are right but now we are using a hiosited arrow function !!!!!!!! 
- IF YOU DON'T SEE ANY DEFFERENCE LET'S THE FOLLOWING EXPLANATION :
- first of all let's see why we got this error message "TypeError: add is not a function"

*- Js will look for any variables and functions to put them in our execution context ( allocation phase )
*- Js will allocate the variable add and it will be equal to undefined
*- after finishing the allocation phase it will go to the execution phase and execute the code line by line
*- it will excute the console.log(add(5)) 
*- does the add variable has a function ? no it doesn't 
*- does the add varibal has a value ? yes it has and it is undefined
*- in other words we are trying to do this undefined(5) because the add variable is equal to undefined
*- so we got this error message "TypeError: add is not a function"

- AND HERE IS A VERY IMPORTANT POINT 
- what if we used "var" keyword instead of "let" or "const" keyword ? 
- unfourtunatly we will get the same error message "TypeError: add is not a function" because the variable add will be equal to undefined
- so we can say that the arrow functions are not hoisted like the oridianry functions


___________________________CONCLUSION___________________________

1- we can use variables and functions before declaring them with "var" keyword only
2- we can't use variables and functions before declaring them with "let" and "const" keywords
3- "let" and "const" keywords are hoisted but we can't use them before declaring them
4- arrow functions are not hoisted like the oridianry functions
5- my articles are the best ( that is the truth :D )

______________________________________________________________________________________________________________________________________________________Fifth Part : 

** arguments object 
- as we said in the first part the variable environment has 3 components ( variables , functions , arguments object )
- we discussed the first 2 components ( variables , functions ) and we discussed how they are hoisted

- now it is time to discuss the argument object ( THE THIRD COMPONENT OF THE VARIABLE ENVIRONMENT ) !!!!!!!!!

=> argument object is an object that has all the arguments that we passed to the function .
=> let's see the following cases : 

1- hitting the function once :

- let's see the following code :
|----------------------------------------------|
| function add(a,b){
|   console.log(arguments);    
| }
|
| add(5,10);
|
| output : [Arguments] { '0': 5, '1': 10 }
|-----------------------------------------------|

- as you can see we have an object called arguments and it has 2 properties ( 0 , 1 ) and their values are ( 5 , 10 )
- the arguments object is not an array but you can describe it as an array that has all the arguments that we passed to the function ( 0 is index and 5 is value, ..... )


2- hitting the function twice :

- what is we called the function twice ? 
- let's use the above code with a very smal edit:
|----------------------------------------------|
| function add(a,b){
|   console.log(arguments);    
| }
|
| add(5,10);
| add("ahmed", 22);
|
| output : 
| [Arguments] { '0': 5, '1': 10 }
| [Arguments] { '0': 'ahmed', '1': 22 }
|-----------------------------------------------|

- as you can see we have 2 arguments objects ( one for each function call )
- if you invoke the function 100 times you will get 100 arguments objects ( one for each function call )


3- hitting arow function :

|----------------------------------------------|
| const add = (a,b)=>{
|   console.log(arguments);    
| }
|
| add(5,10);
|
| output : TRY IT YOURSELF
|-----------------------------------------------|

- when you try this code you will get a very strange output we will discuss it in the next article ( scope chain part )


___________________________CONCLUSION___________________________

1- variable environment has 3 components which allows it to store variables , functions , arguments object
2- when any excution context is created it will have an arguments object ( even if the function doesn't have any parameters it will create an empty object )
3- the arguments object has all the arguments that we passed to the function 
3- the arguments object is not an array but you can describe it as an array 

______________________________________________________________________________________________________________________________________________________Sixth Part : 


** reset parameters

- let's say that you have a function that takes X parameters and you want to get tha total sum of all the parameters
- how can we do that ?

1- we can use the arguments object which has all the arguments that we need 
2- convert the arguments object into an array 
3- iterate over the array and get the total sum of all the elements

- let's code this simple algorithm :
|----------------------------------------------------------------------------------------------------------------------------|
| function sum(){
|  let total = 0;
|  
|  let argsArr = Array.from(arguments);  // convert the arguments object into an array
|  
|   args.map((item)=>total+=item);   // iterate over the array and get the total sum of all the elements
|  
|  return total;
| }
|
| console.log(sum(1,2,3,4,5));   -> output : 15
| console.log(sum(1,1,1,1,1));   -> output : 5
|----------------------------------------------------------------------------------------------------------------------------|


- is there any other way to do that ? 
- the answer is YES !!!!!!!!!!!!!!!!!!!!!!     we can use RESET PARAMETERS 

what is reset parameters ? 
=> it is a way to get all the arguments that we passed to the function as an array using the three dots ( ... )

- let's optimize the above code :
|----------------------------------------------------------------------------------------------------------------------------|
| function sum(...args){    // we can name the parameter as we want but it is better to name it "args"
|  let total = 0;
|  
|  let argsArr = Array.from(arguments);  XXXXXXX no need to this line anymore XXXXXXX
|  
|   args.map((item)=>total+=item);   // iterate over the array and get the total sum of all the elements
|  
|  return total;
| }
|
| console.log(sum(1,2,3,4,5));   //  -> output : 15
| console.log(sum(1,1,1,1,1));  //  -> output : 5
|----------------------------------------------------------------------------------------------------------------------------|

- as you can see we don't need to convert the arguments object into an array anymore
- using reset parameters we can get all the arguments that we passed to the function as an array using the three dots ( ... )
- "...args" will get all the arguments that we passed to the function as an array



IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/
