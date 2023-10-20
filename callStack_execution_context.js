/*

                            we will go through the following points :
|----------------------------------------------------------------------------------------|
| 1- recap on call stack and deep dive into it
| 2- what is excution context ? and what are its components ?
| 3- stages of excution context
| 4- examples on excution context
| 5- what is variable environment ? and what are its components ?
| 6- recap 
|----------------------------------------------------------------------------------------|


______________________________________________________________________________________________________________________________________________________First Part : 

** recap on call stack 

=> last time we talked about the call stack and we knew that that stack is a data structure that follows the LIFO (last in first out) principle
=> and we use it to track our functions calls and where we are in the execution of the program
=> and we called each item in the stack as a function BUT in fact it is not a function


- AND IT IS TIME TO DEEP DIVE INTO THE CALL STACK

=> first of all we need to know that each item in the call stack is not a fucntion it is an "excution context"
=> now we can say that the call stack is a stack of excution contexts HA !!! 
=> aslo we said that the call stack takes all the global code and put it in the stack and then it starts to look for functions calls and put them in the stack
***** and as we said call stack is a stack of excution contexts so it has 2 types of excution contexts :
1- global excution context : which is the default excution context that we have in the call stack and it is the first one
2- function excution context : which is the excution context that we have when we call a function and it is the second one

NOW YOU ARE ASKING YOURSELF WHAT IS EXCUTION CONTEXT RIGHT ? let's see :) 

______________________________________________________________________________________________________________________________________________________Second Part : 

** what is excution context ?

=> excution context is an abstract concept of an environment where the javascript code is evaluated and executed 
=> don't understand it ? let's simplify it
=> we can say that excution context is a block which has the information about the code that is running 

ex : 
=> if we have 2 functions in our code then we have 2 blocks ( excution contexts ) in our stack .
=> each one of them has the information about the code that is running 

SO what kind of information does the excution context has ?
let me think ? 
- we must save the variables and functions that we will use in that code 
- we should know what is the scope of the code because each block of code has its own scope
- we need to know what is the value of the "this" keyword

so we can list the main 3 points/properties that the excution context has as the following :
1- variable environment : which has the variables and functions that we will use in that code
2- scope chain : which has the information about the scope of each block of code 
3- this keyword : which has the value of the "this" keyword

- we will talk about the first point ( variable enviroment ) in this part and the other 2 points ( "this" key word , scope chain ) in the next part
- so don't worry if you didn't understand the scope chain and the "this" keyword we will talk about them in the next parts

BUT !!!!!!!!!!!!!!!! I NEED TO TELL YOU A SECRET UNTIL I MEET YOU IN THE NEXT PARTS
=> do you know the arrow functions ? , arrow functions don't have their own "this" keyword , 
=> we will know all the details in the next parts but for now just know that arrow functions don't have their own "this" keyword , okay ?

______________________________________________________________________________________________________________________________________________________Third Part : 

** stages of excution context 

=> we can divide the excution context into 2 stages : ( memory allocation , excution)

1- memory allocation : 

=> it reserves a space in the memory for the variables and functions that we will use in that code
=> variables and functions are stored in the memory  
=> ex : when we declare a variable in our code the memory allocation stage will reserve a space in the memory for that variable

2- excution : which is the stage where the code is executed ( push excution context/pop excution context from the call stack)
=> it excutes the code lines and function calls 
=> ex : when we assign a value to a variable in our code the excution stage will assign that value to the variable

______________________________Notes______________________________

=> each stage run in order and we can't run the excution stage before the memory allocation stage 
=> memory allocation stage is the stage where we find a space in our memory for the variables and functions that we will use in that code
=> all reserved variables are assigned to undefined in the memory allocation stage 
=> the excution stage is the stage where we assign the values to the variables and excute the code lines and function calls
______________________________________________________________________________________________________________________________________________________Fourth Part : 

** example on excution context 

- I DON'T LIKE WASING TIME SO LET'S GO TO THE EXAMPLE

                        do you see this code ? 
|--------------------------------------------------------------|
| let message = "hello";                                                  
|
| function sayMyName() { 
|   console.log("Ahmed");
| }
|
| console.log(message);
| sayMyName(); // with the voice of Heisenberg
|
| output : hello Ahmed 
|--------------------------------------------------------------|

- very easy one right ? let's see what happens in the call stack :) 

*** first of all we will go through memory allocation stage ( global excution context ) : 

- lets get to work does the first line has any thing to save in the memory ?  
- yes it has a variable called message so we will reserve a space in the memory for it and assign it to undefined
- call stack : ( global excution context ) -> ( memory allocation stage ) -> ( message : undefined )
- does the second line has any thing to save in the memory ?
- yes it has a function called sayMyName so we will reserve a space in the memory all the function block 
- call stack : ( global excution context ) -> ( memory allocation stage ) -> [ ( message : undefined ) , ( sayMyName : function block ) ]
- does any line has any thing to save in the memory ?
- no it doesn't so we will go to the excution stage

*** second we will go to the excution stage : 
- does the first line has any thing to excute ?
- yes it has a variable called message so we will assign the value "hello" to it
- call stack : ( global excution context ) -> ( memory allocation stage ) -> [ ( message : "hello" ) , ( sayMyName : function block ) ]
- does the second line has any thing to excute ?
- no it doesn't so we will go to the next line ( it is the function block we are looking for something to excute )
- does the third line has any thing to excute ?
- yes it has a console.log so we will excute it and print "hello" in the console -> output : hello
- does the fourth line has any thing to excute ?
- yes it has a function call so we will create a new excution context for it and push it into our call stack                                                       
- stack : top = ( sayMyName excution context ) -> ( global excution context )  

- we created a new excution context for the function call and we pushed it into our call stack right ? 
- we must start with the memory allocation stage inside the function block and then go to the excution stage inside the function block 
- is there any line of code inside the function has any thing to save in the memory ?
- no it doesn't so we will go to the excution stage inside the fucntion block
- does the first line of the function has any thing to excute ? 
- yes it has a console.log so we will excute it and print "Ahmed" in the console -> output : Ahmed
- does the function block has any thing to excute ?

- no it doesn't and the function block is done so we will pop the excution context from the call stack and return to the global excution context
- stack : top = ( global excution context )
- last time we stopped at the calling of the function in the global excution context so we will continue from there
- does the global excution context has any thing to excute ?
- no it doesn't and the global excution context is done so we will pop it from the call stack
- stack : top = empty
- the call stack is empty and the program is done
- output : hello Ahmed
______________________________________________________________________________________________________________________________________________________Fifth Part : 

** what is variable environment ?

=> as we said before the excution context has 3 main properties one of them is the variable environment
=> so let's take a close look at it

***** simply we can divide the variable environment into 3 parts :
1- the variables : which has the variables that we will use in that code
2- the functions : which has the functions that we will use
3- the arguments object : which has the arguments that code uses 

=> we will talk about them in the next parts but for now just know that the variable environment has 3 parts ( variables , functions , arguments object )

______________________________________________________________________________________________________________________________________________________Sixth Part : 

** recap

*each item in the call stack is not a fucntion or item it is an "excution context"
*the excution context is a block which has the information about the code that is running
*the excution context has 3 main properties : 
    1- variable environment : has 3 parts ( variables , functions , arguments object ) ( will be discussed in the next parts )       
    2- scope chain  ( will be discussed in the next parts )                                                                     
    3- "this" keyword  ( will be discussed in the next parts )       



IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/

