/*

                            we will go through the following points :
|----------------------------------------------------------------------------------------|
| 1- welcome to architecture      
| 2- single-threaded vs multi-threaded ?
| 3- Blocking Vs Non-Blocking
| 4- Microtask Vs Macrotask 
| 5- Schronous Vs Aschronous behaviors 
|----------------------------------------------------------------------------------------|


______________________________________________________________________________________________________________________________________________________First Part : 

** welcome to architecture !! 

- i would like to start with a very deap question : what is software architecture ?
=> software architecture is the fundamental organization of a software system, embodied in its components and their relationships to each other. 
=> It is the backbone that holds together the various components of a software system, ensuring they work together cohesively to fulfill the system's intended purpose.
=> it providing a clear understanding of how the system's components interact, communicate, and collaborate. It defines the overall structure, and relationships between the various components of the software system
=> we can say that the software architecture serves as a blueprint for the software's design ( software architecture is low-level design )
=> we have many types of software architecture like ( layered architecture , event-driven architecture , microservices architecture , etc ... )

- BUT why are we talking about software architecture ? ummmmmmm let's see
- the last articles we talked about main components of V8 engine right ?
- and as we all know that V8 is a normal software system so it has an architecture right ?

- but what is the architecture of V8 engine ?
=> V8 engine is a single-threaded application that uses an event-driven architecture and we will dicuss this in this article 

______________________________________________________________________________________________________________________________________________________Second Part : 

** Single-threaded vs Multi-threaded ?

- first of all need to know what is a process ?
=>  a process is an instance of a computer program in execution. 
=> It is a collection of resources, including memory, code, and data, that is used by the operating system to manage the program's execution.

-  so what is a thread ?
=> The smallest unit of execution in a computer program. 
=> a thread is like a lightweight process, sharing resources with other threads within the same program.
=> a thread is created from a process and shares the process's resources, such as its memory and open files. 
=> Multiple threads within a single process can be executed concurrently, which allows a process to perform multiple tasks simultaneously.

- we can say that any process has at least one thread ( main thread ) and it may have many threads ( multi-threaded )
- each thread can execute any part of the process code ( only one part )
( each thread can handle only one task at a time but it can switch between tasks very quickly )

- SOOOOOOO what is the difference between single-threaded and multi-threaded ?

=> in an easy form we can say :
1-  single-threaded is an enviroment which can only run one task !!! ( because it has only one thread and each thread can only run one task at a time )
2-  multi-threaded is an enviroment which can run many tasks at the same time !!! ( because it has many threads so each thread can run any task )

______________________________________________________________________________________________________________________________________________________Third Part : 

** Blocking Vs Non-Blocking

______________________________________________________________________________________________________________________________________________________Fourth Part : 

** Microtask Vs macrotask 

______________________________________________________________________________________________________________________________________________________Fifth Part : 

** Schronous Vs Aschronous behaviors 



IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/