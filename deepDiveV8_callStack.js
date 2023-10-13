/*

                            we will go through the following points :
|----------------------------------------------------------------------------------------|
| 1- most common Js engines 
| 2- why V8 engine ? 
| 3- components of V8 engine and how it works ?
| 4- what is call stack ?
| 5- how does call stack works ?
| 6- Tail call optimization (TCO) 
| 7- examples on call stack usage in our daily code 
|----------------------------------------------------------------------------------------|


______________________________________________________________________________________________________________________________________________________First Part : 

** most common Js engines :

- as we said befor , Js is a high level language , so it needs a compiler to translate it to machine code , and this compiler is called (Js engine).
- also there are many Js engines , but the most common ones are :

1- V8 : ( we will discuss it in details in the next articles )
=>the most popular JavaScript engine. 
=> developed by Google for use in Google Chrome.
=> it is also used in Node.js which is a server-side JavaScript runtime environment.
=> it was written in C++ 

2- SpiderMonkey : 
=> developed by Mozilla for use in the Firefox web browser.
=> It is also used in a number of other applications, such as the GNOME Shell and the Thunderbird email client.
=> it was written in C++ 

3- JavaScriptCore : 
=> developed by Apple for use in the Safari web browser.
=> It is also used in a number of other applications, such as the iOS and macOS operating systems.
=> it was written in C++ and Objective-C

4- Chakra : 
=> developed by Microsoft for use in the Microsoft Edge web browser.
=> It is also used in a number of other applications, such as the Windows operating system and Visual Studio Code.
=> it was written in C++


** if you noticed that all of these engines are written in C++ , so why C++ ????  IT IS A HUGEEEEEE AMOUNT OF C++ :)

=> this is because C++ is a high-performance language that is well-suited for developing system-level software.

C++ advantages :
1- it is a compiled language, which means that it is converted to machine code before it is executed. This makes C++ programs very fast.
2- it gives programmers a lot of control over memory management. This is important for developing JavaScript engines, which need to manage large amounts of memory efficiently.
3- C++ is a cross-platform language, which means that it can be used to develop software for a variety of different operating systems


______________________________________________________________________________________________________________________________________________________Second Part : 

** why V8 engine ? , there is a lot of engines , so why choose V8 to explain ?

- first of all , I LOVE GOOGLE ( i hope they will give me a job offer after this article ) , and V8 is developed by Google , so it is the best engine ever :)
- second , there is no faster engine than V8 , it is the fastest engine ever as it uses various techniques to optimize the performance of JavaScript code ( ex : JIT compiler )
- the other engines are also fast , effiecient , and has the same pros that V8 has (being an open source , cross-platform , and so on ) but the V8 still the best one on this planet 

______________________________________________________________________________________________________________________________________________________Third Part : 

** components of V8 engine : 

1- Ignition interpreter (baseline compiler) : generate non-optimized machine code. 
2- TurboFan and Crankshaft compilers : re-compile the non-optimized machine code for optimal performance. 
3- Heap ( we will discuss it in details in the next articles ) : where objects are allocated.
4- Call stack ( we will discuss it in details in this article )
5- Callback queue ( we will discuss it in details in the next articles ) : where events are queued.


** how it works ?

LET'S TAKE A LOOK ON THE V8 ENGINE WORKING FLOW : 

1- It all starts with getting JavaScript code from the network.
2- V8 parses the source code and turns it into an Abstract Syntax Tree (AST).
3- based on that AST, the Ignition interpreter can start to do its thing and produce bytecode.
4- at that point, the engine starts running the code and collecting type feedback.
5- to make it run faster, the byte code can be sent to the optimizing compiler along with feedback data. 
( The optimizing compiler makes certain assumptions based on it and then produces highly-optimized machine code )
6- If, at some point, one of the assumptions turns out to be incorrect, the optimizing compiler de-optimizes and goes back to the interpreter.

in stage 3 -> Ignition is used to generate bytecode from the AST. ( not-optimized machine code )
in stage 5 -> TurboFan and Crankshaft are used to generate optimized machine code from the bytecode. ( optimized machine code )

- IF YOU DON'T UNDERSTAND NO PROBLEM , I TOOK MY PRECAUTIONS. LOOK AT THE FOLLOWING IMAGE : 
https://www.freecodecamp.org/news/content/images/2020/08/v8-overview-2.png

- the previous image is a very simple explanation of how V8 works ( shows the last 6 stages we talked about )

______________________________________________________________________________________________________________________________________________________Fourth Part : 

****** if you don't know what the STACK is, please read this : https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/

** what is call stack ?
=> simply the call-stack is a list of function to execute by calling order. 
=> every function which calls another function will be inserted one after the other directly, and callbacks will be sent to the end. 
=> after each function is executed, it will be removed from the call-stack.

______________________________________________________________________________________________________________________________________________________Fifth Part : 

** how does call stack works ?

=> let's take a look on the following example :

- do you remember the last time when your mom asked you to help her in the kitchen ? 
- let's say that she asked you to bring her some eggs and while you are going to bring her the eggs she asked you to open the kitchen window
- so you did what she said in this order : 
1- you opened the kitchen window as it is the last thing she asked you to do
2- you went to the fridge and brought her the eggs

=> so the call stack will be like this :
1- supose that the main function is the fun1 function and the other function is fun2 ( the function that is called by the main function )
2- at first when we invoke the main function , it will be pushed to the call stack ( stack top = main function->fun1 ) 
3- while you are excuting the fun1 , you called fun2 , so fun2 will be pushed to the call stack ( stack top = fun2 )
4- V8 will PAUSE the excution of fun1 and will excute fun2 ( as the stack top = fun2 )
5- after excuting fun2 , V8 will POP fun2 from the call stack ( stack top = main function )
6- V8 will RESUME the excution of fun1 ( as the stack top = main function )
7- after excuting fun1 , V8 will POP fun1 from the call stack ( stack top = empty )

WE ARE FINISHED , OUR STACK IS CLEAN NOW :)

________________________CONCLUSION________________________

- the top of the call stack is the function that is currently being executed.
- the call stack is synchronous ( one command at a time ) , so it can only do one thing at a time.
- when we stop at some point in the current task and start another task , the call stack will push the new task to the top of the stack and pause the current task.

______________________________________________________________________________________________________________________________________________________Sixth Part : 

** what is Tail call optimization (TCO) ??? ACTUALLY I DIDN'T KNOW WHAT IS IT UNTIL I WROTE THIS ARTICLE :) 

=> it is a technique used by compilers to optimize recursive calls ( used by V8 engine )
=> tail call optimization (TCO) works by eliminating the need to push a new frame onto the call stack for each recursive call. 
=> this is done by replacing the recursive call with a jump instruction.
=> when a recursive function is called, a new frame is pushed onto the call stack for each recursive call ( This can lead to a stack overflow will be discussed in the next articles ) 
=>TCO works by eliminating the need to push a new frame onto the call stack for each recursive call. This is done by replacing the recursive call with a jump instruction. 
=> the jump instruction jumps to the beginning of the function, which is equivalent to making a recursive call.

DON'T WORRY IF YOU DIDN'T UNDERSTAND , WE WILL GO THROUGH AN EXAMPLE TO MAKE IT CLEAR :)

// each recursive call will be pushed to the call stack -> stack overflow
|-----------------------------------------------------------|
| function factorial(n) {
|   if (n === 0) return 1 ;
|   return n * factorial(n - 1) ;    
| }                            
| 
| const ans = factorial(5) ; // 120       
|-----------------------------------------------------------|


// each recursive call will be replaced with a jump instruction -> no stack overflow
|-----------------------------------------------------------|
| function factorial(n, accumulator = 1) {
|   if (n === 0) return accumulator ;
|   return n * factorial(n - 1 , n * accumulator) ;    
| }                            
| 
| const ans = factorial(5) ; // 120       
|-----------------------------------------------------------|

- this second function uses a second argument (accumulator), to keep track of the result of the recursive calls. 
- the recursive call is replaced with a jump instruction to the beginning of the function, with the accumulator argument updated. 
- this eliminates the need to push a new frame onto the call stack for each recursive call.

______________________________________________________________________________________________________________________________________________________Seventh Part : 

- THE FIIIIIIIIIIIIIIIIIIIIINAL PART , I PROMISE :)
- LET'S GO THROUGH AN EXAMPLES TO SEE HOW call stack IS USED : 

consider the following code , what do you think will be the output ?
|-----------------------------------------------------|
| let firstName = "V" ;
| let lastName = "8" ;
|
| function printFirstName(){
|     console.log(firstName) ;
|     printLastName() ;
|     console.log("firstName is printed") ;                                             1-  V
|   }                                                                                                       2- 8
|                                                                           OUTPUT     =>         3- lastName is printed
|                                                                                                           4- firstName is printed
| function printFirstName(){
|     conso.log(lastName) ;
|     console.log("lastName is printed") ;
|   }
|
| printFirstName();
|-----------------------------------------------------|


- so what happened here ? let's see :

1* do you see all the global variables ? ( firstName , lastName, call of the printFirstName function ) , they will be pushed to the call stack as 1 item ( stack top = printFirstName )       
2* V8 will excute the printFirstName function , so it will print the firstName ( stack top = printFirstName ) -> V 
3* when we continue the excution of the printFirstName function , we will call the printLastName function , so it will be pushed to the call stack ( stack top = printLastName -> printFirstName )
4* V8 will pause the excution of the printFirstName function and will excute the printLastName function ( stack top = printLastName )
5* V8 will print the lastName -> 8 ( stack top = printLastName )
5* V8 will continue the excution of the printLastName function , so it will print "lastName is printed"
6* the printLastName function is finished , so V8 will POP it from the call stack ( stack top = printFirstName )
7* V8 will continue the excution of the printFirstName function , so it will print "firstName is printed"
8* the printFirstName function is finished , so V8 will POP it from the call stack ( stack top = empty )
9* stack is empty === we have no more work to do === we are finished :)


- I HOPE THAT YOU FIND THIS ARTICLE HELPFUL , WELL EXPLAINED , AND EASY TO UNDERSTAND 
- SEE YOU IN THE NEXT ARTICLE :)


IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/

