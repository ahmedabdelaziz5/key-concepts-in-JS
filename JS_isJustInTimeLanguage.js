/*

we can devide the language into 3 types:

1. compiled language : ex c++ and c

- the code is compiled before it is executed

- create an execution file and wait the user to open it 

- transformation process : source code -> compiler -> machine code ( create am execution file )-> program


2. interpreted language : ex Python and old version of JS

- there is no  execution file created 

- transformation process : source code -> program

- the program will be executed/translated line by line


3. just in time language : ex  JS  and Java

- the same compilation process in the compiled language 

- but the execution file is created during the execution which means that there is no execution file created + the program will be excuted automatically 

- the code is compiled during the execution

_________________________________________________ note that ______________________________________________________  


JavaScript is both an interpreted and a just-in-time (JIT) compiled language. This means that JavaScript code is first interpreted line by line,
but the JavaScript engine also uses a JIT compiler to compile the code to machine code as it is running. This allows JavaScript to be both fast and flexible.

- Interpretation : When JavaScript code is interpreted, the JavaScript engine reads the code and executes it line by line. This is a relatively slow process,
but it is also very flexible. It allows JavaScript to be used in a variety of environments, including web browsers and servers.

- Just-in-time (JIT) compilation : JIT compilation is a process where the JavaScript engine compiles JavaScript code to machine code as it is running. 
This makes JavaScript faster, but it also makes it less flexible.

JavaScript engines : 

JavaScript engines are responsible for interpreting and compiling JavaScript code. Some of the most popular JavaScript engines include:

1- V8 (used in Chrome and Node.js)
2- SpiderMonkey (used in Firefox)
3- JavaScriptCore (used in Safari)

*/