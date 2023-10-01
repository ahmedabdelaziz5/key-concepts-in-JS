/*

                                     we will go throuth the following points :
|----------------------------------------------------------------------------------------|
| 1- what do we mean by memory leak and does it have types ?
| 2- what is garbage collector and what garbage collector used for  ?
| 3- how garbage collector works ?
| 4- is garbage collector is the magic solution for memory leaks and how to avoid memory leaks ?                   
| 5- example on memory leaks                                                                                        
|----------------------------------------------------------------------------------------|


______________________________________________________________________________________________________________________________________________________First Part : 

** what do we mean by memory leak ? 
=>A memory leak occurs when a computer program fails to release/free memory that is no longer needed. 

- still don't get it right ??? let's go through this example 

if we tried to open dev tools and to type this function in the console : 

|-------------------------------|
| function memoryLeak() {
|    this.variable = 'variable';
| }
|
| memoryLeak();
|-------------------------------|

- after invoking the function try typing ->window<- in the console -> this will return the window object

- open the window obj you will see that the variable is still there and it is not deleted from the memory after the function is invoked  !!!!!!!!! 
- BUT WHY !!!!!!!!!!!!  i dont need this variable anymore so why it is still there !!!!! 
- that's our problem which is called a memory leak , we don't need this variable anymore but it is still there in the memory 
- this the uneffient usage of our memory 

** types of memory leaks :

1- Strong references: A strong reference occurs when two objects reference each other. Even if one of the objects is no longer being used, the garbage collector cannot reclaim its memory because the other object is still referencing it.
2- Circular references: A circular reference occurs when two or more objects reference each other in a loop. This can cause the garbage collector to become stuck and unable to reclaim any memory.
3- Phantom references: A phantom reference is a special type of reference that tells the garbage collector to notify you when the object is about to be reclaimed. This can be useful for certain types of applications, but it can also lead to memory leaks if not used carefully.

______________________________________________________________________________________________________________________________________________________Second Part : 

** what is garbage collector ? 
=> Garbage collection is a technique used by some programming languages and operating systems to automatically manage memory allocation and deallocation. 
when the garbage collector detects that an object is no longer being used, it reclaims the memory that the object occupies. This helps to prevent memory leaks



** garbage collector is used for ?
=> Garbage collection is used to prevent memory leaks and to reclaim memory that is no longer being used by the program ( free up memory automatically )
without garbage collection, the program would eventually run out of memory and crash + we will need to manually free up memory that is no longer being used

____________________________ conclusion : ____________________________

- garbage collector is a valid solution for memory leaks and it cleans up all the mess we have made in the memory

______________________________________________________________________________________________________________________________________________________Third Part : 

** how garbage collector works ?


There are a number of different garbage collection algorithms, but the most common one is the mark-and-sweep algorithm so will we talk about it

mark-and-sweep algorithm works with very 2 simple phases : 

1- Mark phase: The garbage collector starts by marking all of the objects that are currently reachable from the roots.
note : The roots are the objects that are known to be alive ( used ) , such as the global variables and the stack frames of currently executing threads

2- Sweep phase: Once all of the reachable/used objects have been marked, the garbage collector sweeps through the memory and reclaims the memory of all of the objects that were not marked.

don't get it ??NO PROBLEM , YOUR ARE NOT ALONE I DON'T UNDERSATND IT TOO  

let's go through an example :

- we have a simple program that creates a few objects with the following flow : 

|----------------|
| A -> B -> C
| D -> E 
|----------------|

- imagin that our program starts with using A, B, C and D let's see how the mark-and-sweep will do his job !!!!!! 
- our algorithm will start with marking all the objects that are currently reachable from the roots ( A, B, C, D )
- after that it will sweep/free up the memory of all of the objects that were not marked ( E ) 
- as a result we have kept ( A, B, C, D ) and we have freed up the memory of ( E ) because it is not used anymore 
- WOOOOOOOOOOOOOOOOW IT IS MAGIC * - *

______________________________________________________________________________________________________________________________________________________Fourth Part : 

** is garbage collector is the magic solution for memory leaks ? 

unfortunately i have a bad news :( 

- garbage collector is NOT A MAGIC SOLUTION FOR MEMORY LEAKS.
- memory leaks can still occur by doing the mistakes we talked about in the first part ( strong references, circular references, phantom references ) 

- WHAT WE GONNA DO THEN !!!!!!!!!!!! , it's simple do the following things :

1- write clean and efficient code: One of the best ways to avoid memory leaks is to write clean and efficient code. 
2- use a debugger: A debugger can be a valuable tool for finding and fixing memory leaks by scaning your code for potential problems and not needed variables


______________________________________________________________________________________________________________________________________________________Fifth Part : 


** example on memory leaks : 

- i know that this part of every article is the best part for you my friend so let's go through this 

- fist of all i would like to surprise you with this fact :

|-----------------------------------------------------------------------------------------|
|    NOT ALL THE PROGRAMMING LANGUAGES HAVE GARBAGE COLLECTOR :( 
|-----------------------------------------------------------------------------------------|

- i know it is sad but it is true , but don't worry i will tell you what to do 

1- if you are using a programming language like ( C, C++, Rust, ,Assembly language, Fortran ) you will need to free up the memory manually because you are a poor guy who don't have a garbage collector

- let's go through an example with C language and see how we will free up the memory manually :

|-------------------------------------------------------------------------------------------------------------------|
| #include <stdio.h>
| #include <stdlib.h>
| int main(void) {
|    int* ptr;
|    ptr = (int*)malloc(sizeof(int));
| 
|   \\ Do some work/logic here //
| 
|    free(ptr);  \\ free up the memory of  clean the variable from it after we have done our work with it // 
|    return;
| }
|-------------------------------------------------------------------------------------------------------------------|


2- if you are a lucky guy and you are using a programming language like ( Java, C#, Python, JavaScript ) you don't need to free up the memory manually because you have a garbage collector
you can just do your work and the garbage collector will do the rest for you ( BUT DON'T FORGET TO WRITE CLEAN AND EFFICIENT CODE TO AVOID MEMORY LEAKS TOO )


IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/

