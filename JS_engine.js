/*

                            we will go through the following points :
|----------------------------------------------------------------------------------------|
| 1- what are programming languages ?
| 2- how programming languages works ? + engine explanation
| 3- components of programming languages engines                                                                                     
| 4- intro to compilation context in Js 
| 5- what is optimizer ?
| 6- does optimizer is a magic solution ?
|----------------------------------------------------------------------------------------|


______________________________________________________________________________________________________________________________________________________First Part : 

** what are programming languages ?

- REMEMBER YOUR FIRST QUESTION ON THE FIRST DAY LEARNING PROGRAMMIN ? 
- I KNOW THAT IT HAS BEEN A LONG TIME SINCE YOU HAVE HEARD THIS QUESTION BUT DON'T WORRY I WILL REMIND YOU WHAT IS IT 
CAUSE WE NEED TO REMEBER IT TO UNDERSTAND THE REST OF THE ARTICLE

=> programming languages are : ( ex : Java, C, C++, C#, Python, JavaScript, etc ... )
1- formal languages that are used to write computer programs. 
2- they are used to tell a computer what to do and how to do it in a way that the computer can understand and execute + humans can feel comfortable with it too
3- we know that all computers are machines and they only understand machine code ( 0s and 1s ).
4- so we need to use programming languages to write our code and then the programming languages will convert our code to machine code that the computer can understand and execute 
5- programming languages are made up of a set of rules and syntax that define how to write code.
6- programming languages are also known as high-level languages because they are closer to human languages than machine languages.

- EASY RIGHT ????? I KNOW THAT YOU ARE A GENIUS BUT I JUST WANTED TO MAKE SURE THAT YOU REMEBER IT :)

______________________________________________________________________________________________________________________________________________________Second Part : 

** how programming languages works ? 


- like we said before there are two main ways to translate programming languages into machine code ( compilation and interpretation ) 
- if you don't remeber this check the 2nd topic here : https://github.com/ahmedabdelaziz5/key-concepts-in-JS/blob/master/JS_isJustInTimeLanguage.js

- so let's assum that we will use any of these two ways to translate our code to machine code , what will happen next ????? 

the answer is :
1- high-level language program is translated into machine code . 
2- the machine code ( 0s ,1s ) is loaded into the computer's memory and executed. 
3- the computer's CPU will then execute the machine code instructions one by one.

- AND NOW YOU WANT TO TELL ME THAT if we let the computer do all of this work it will take a lot of time and effort !!!!!! 
- SO WHAT WE GONNA DO ??????????????????
=> THE ANSWER IS : WE WILL USE A programming language ENGINE to make this process faster, easier and more organized

so WHAT IS THE PROGRAMMING LANGUAGE ENGINE ????
=> it is a software component that interprets or executes programs written in a particular programming language. 
=> It is responsible for parsing the program code, translating it into machine code, and executing the machine code.
=> it makes this process faster, easier and more organized
=> programming language engines are essential for the development and execution of software applications. 
=> they provide a layer of abstraction between the programming language and the underlying hardware platform.

________________________________ CONCLUSION _______________________________________

- programming languages ENGINES are the link between the programming languages and the hardware 
( engine are the translator between the programming languages and the hardware )

- do you rememeber our talk about garbage collector and memory leaks in the 1st concept ? I HAVE A SURPRISE FOR YOU :) 
=> programming language engines are not just translators. 
=> They also perform other tasks, such as memory management, garbage collection, and error handling. 

I FEEL LIKE THE PREVIOUS CONCEPTS ARE COMING BACK TO YOU NOW , DO YOU BELIEVE IN DEJA VU NOW ?????

______________________________________________________________________________________________________________________________________________________Third Part : 

** components of programming languages engines :

- after we discussed what is programming languages engines and how it works , we need to know what are the components it RIGHT ? 

- we can list the components of programming languages engines into this list : 

1* Lexer: The lexer is responsible for breaking the program code into tokens ( tokens are the basic building blocks of programs, such as keywords, variables, and operators )
2* Parser: The parser is responsible for analyzing the tokens and constructing a parse tree ( parse tree is a representation of the program's structure) .
3* Semantic analyzer: The semantic analyzer is responsible for checking the parse tree for semantic errors ( Semantic errors are errors in the meaning of the program, such as using an undeclared variable or assigning a value to a variable of the wrong type ) .
4* Code generator: The code generator is responsible for translating the parse tree into machine code (machine code is 0s and 1s that machine can understand ) .
5* Runtime environment: The runtime environment is responsible for providing the necessary resources for the program to execute, such as memory and stack space.
6* In addition to these main components, programming language engines may also include other components, such as: Garbage collector , Just-in-time (JIT) compiler 

- ENGINE MAKE OUR LIFE EASIER RIGHT ????? 
______________________________________________________________________________________________________________________________________________________Fourth Part : 

**  intro to compilation context in Js : 

- we said before that Js use JIT compiler to translate our code to machine code right ?
- so what is the compilation context in Js what Js engine do under the hood ? LET'S HIT IT :)

- we can represent the compilation context in Js in this way :
=> Js code -> parser  ---AST (tree)---> compillation ---machine code ( 0s , 1s )-->  execution   

- let's explain this in details :
1- we have our Js code
2- the parser will parse our code and convert it to AST ( abstract syntax tree )
3- the compilation will take the AST and convert it to machine code trough the compilation process
4- the machine code will be executed by the computer 

- OOOOOH MY BAD I FORGOT TO TELL YOU WHAT IS AST ( abstract syntax tree ) ??????? 
- UMMMMMM NO PROBLEM keep your eyes on the screen and you will know what is it :)

=> AST is a tree representation of the abstract syntactic structure of source code written in a programming language. ( still don't understand it, i know )
=> AST is a tree representation of every statement in our code becasue the engine needs to a better way to organize our code and make it easier to translate 
=> so the engine will take our code and convert it to AST ( tree ) and then it will use this tree to translate our code to machine code 

=> i know that you don't believe me so let's see an example :
- why don't you try this website : https://astexplorer.net/
- in this website you can write your Js code and it will show you the AST of your code with its tree and json structure , try it your self :)

- WE DID A VERY GOOD JOB SO FAR HA ? :)

______________________________________________________________________________________________________________________________________________________Fifth Part : 


**  what is optimtzer and how it works ?

- remember the pervious part ? we said that the compilation process flow was the following :
=> Js code -> parser  ---AST (tree)---> compillation ---machine code ( 0s , 1s )-->  execution   

- I'M SORRY BUT I LIED TO YOU :(

- there is a hidden part in this process that we didn't talk about , it is the optimizer part 

- so what is the optimizer ? 
=> it is a tool that improves the performance or efficiency of a program. ( it runs in the background and we don't see it )

what about the compilation process flow now ???? okay let's see it again :
1- we have our Js code
2- the parser will parse our code and convert it to AST ( abstract syntax tree )
3- the compilation will take the AST and convert it to machine code trough the compilation process
4- the machine code will be executed by the computer 
5- here is the hidden part : when the compilation process is done the optimizer will take the machine code and optimize it to make it faster and more efficient
and start to replace the old machine code with the new optimized machine code

so we can represent the compilation process flow in this way now :
=> Js code -> parser  ---AST (tree)---> compillation ---machine code ( 0s , 1s )-->  execution --> optimization and replacing the old machine code to be ecxecuted again

**** note that : in the part of optimization and replacing the old machine code our program is still running and the optimizer is running in the background 

______________________________________________________________________________________________________________________________________________________sixth Part : 

** doest optimizer is a magic solution ?

- optimizer is a very good tool that make our code faster and can make a significant difference in the performance of our code
- BUT optimizer is not a magic solution that will make our code faster in all cases AND YOU NEED TO KNOW THAT

=> I'm bored of writing so let's see an example : 

- let's assum that we have these 2 pieces of code  : 

// 1st code
|-----------------------------------------|
| function optimized(a,b){
|    this.a = a ; 
|    this.b = b ;
| }
| let obj1 = new optimized(1,2) ;
| let obj2 = new optimized(3,4) ;  
|-----------------------------------------|

// 2nd code
|-----------------------------------------|
| function nonOptimized( ){ }
|
| let obj1 = new nonOptimized() ;
| obj1.a = 1 ;
| obj1.b = 2 ;
|
| let obj2 = new nonOptimized() ;
| obj2.a = 2 ;
| obj2.b = 1 ;
|-----------------------------------------|

- if we run these two pieces of code we will find that the 2nd code is absolutely trash and it is very bad compared to the 1st code
- in the first code we created a function and we created 2 objects from the same function 
- in the second code we created a function and we created 2 instances from the same function 
- so as a result in the 2nd code we will have 2 different objects of the same function that have the same properties and methods and this is a very bad thing

*** NOTE :  things like that optimizer can't handle it because as we said before in the 5th concept that Js creates a hidden class for every object 
so in the 2nd code the Js will create 2 different hidden classes for the 2 objects ( which are related to the same function !!!! )
but in the 1st code the Js will create only one hidden class for that function , YOU GOT ME RIGHT ?????



SURPRISE WE ARE DONE , 
I KNOW THAT YOU STILL DON'T UNDERSATND ANYTHING BUT DON'T WORRY YOU ARE NOT ALONE , I DON'T UNDERSTAND ANYTHING TOO 

IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/

