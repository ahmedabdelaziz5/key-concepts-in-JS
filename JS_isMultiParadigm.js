/*

                                                we will go throuth the following points :
|------------------------------------------------------------------------------------------------------------------------|
| 1- what is a paradigm ?                                                                                                                                                                                         
| 2- what are the main paradigms ?                                                                                                                                  
| 3- what is the difference between imperative and declarative paradigm ?                                                                  
| 4- examples on imperative paradigm :  procedural programming , object oriented programming , parallel programming            
| 5- examples on declarative paradigm  :  functional programming , database processing Approach                                               
| 6- what kind of paradigm is javascript ?                                                                                                                        
|-------------------------------------------------------------------------------------------------------------------------|




______________________________________________________________________________________________________________________________________________________First Part : 

*first of all we need to know what is a paradigm !?              
=> a programming paradigm is a way of thinking about and designing computer programs. 
It is a set of principles and practices that define how a programmer should approach the task of writing code.

______________________________________________________________________________________________________________________________________________________Second Part : 

- we can divide the paradigms into two main categories ( Imperative Paradigm , Declarative Paradigm) : 

_____________________________________________________________________________________________________________________________________________________Third Part :


*what do we mean with Imperative paradigm ?
=> it is a paradigm that uses statements that change a program's state line by line ( ex : for loop , if statement , while loop , ...) 

*what do we mean with Declarative paradigm ?
=> it is a paradigm that uses expressions to describe a program's logic and excute the logic without knowing the way of excuting which is in the background 
( ex : SQL , map , filter , reduce , ... )

_____________________________________________________________________________________________________________________________________________________Fourth Part :

*examples on imperative paradigm :

1- procedural programming  : the same to imperative programming but it is more organized and structured

ex : c, c++, java

code sample : 

let sum = 0 ;
for(let i = 0 ; i < 10 ; i++){
    sum += i ; 
}
console.log(sum) ;


2- object oriented programming : it is a programming paradigm that uses objects and classes to organize code ( class/objects , inheritance , polymorphism , encapsulation , ... )

ex :  OOP in c++, java, python, javascript, etc.....

code sample : 

class Person {
    this.name = name ;
    this.age = age ;
    this.salary = salary ;
}
let person1 = new Person("ahmed" , 20 , 10000) ;


3- parallel programming : it is a programming paradigm that uses parallelism to execute a program faster ( ex : multi-threading , multi-processing , ... )

ex :  parallel programming in c++, java, python, javascript, etc.....

code sample :

const worker = new Worker('worker.js');      // Create a new Web Worker -> thread 
worker.postMessage([1, 2, 3, 4, 5]);   // Send some data to the worker
worker.onmessage = function(event) {    // Listen for a message from the worker
    const result = event.data;                     // Receive the result from the worker
    console.log(result);                               // Do something with the result
};

_____________________________________________________________________________________________________________________________________________________Fifth Part

2- Declarative Paradigm :

*examples on imperative paradigm : 

1-  functional programming : it is a programming paradigm that uses functions to organize code ( pure functions , immutability , recursion , ... ) and hide its implementation

ex : functional programming in javascript , haskell , scala , etc...

code sample :

let arr = [1,2,3,4,5] ;
function getArraySum(arr){
    let sum = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i] ;
    }
    return sum ;
};
getArraySum(arr); 

- note that : in the functional programming we can replace the getArraySum function and program still works as expected with all functionalities 


2- database processing Approach : Database/data-driven programming paradigm approach is a software development approach that uses a database to store and manage the data that the application needs.

ex : The database searches for all of the products that match the search query. It then returns the results to the application. 

code sample :

SELECT * FROM products WHERE name LIKE '%search_query%'; 

_____________________________________________________________________________________________________________________________________________________Sixth Part :


what kind of paradigm does javascript use ?
=> JavaScript is a multi-paradigm programming language, which means that it supports multiple programming paradigms, including all we expalined above

**** note that :
JavaScript is primarily an object-oriented language, but it also supports functional programming and procedural programming.
This makes JavaScript a very versatile language that can be used to write a wide variety of applications.


IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)


*/

