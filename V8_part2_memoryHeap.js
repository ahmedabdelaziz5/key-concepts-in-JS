/*

                            we will go through the following points :
|----------------------------------------------------------------------------------------|
| 1- revision on programming (memory allocation)
| 2- what is memory heap ? 
| 3- data structures, dynamic memory allocation and memory deallocation 
| 4- fragmentation and defragmentation
| 5- does dynamic non-primitive data types exist ?
| 6- pass by value Vs pass by reference
|----------------------------------------------------------------------------------------|


______________________________________________________________________________________________________________________________________________________First Part : 

********** revision on programming (memory allocation) 

- as we know that we can divide the data types into two types :
1- primitive data types ( int , char , float , double , boolean , ... )
2- non-primitive data types ( arrays , objects , strings, classes, ... )

- and we know that the primitive data types reserve a fixed amount of memory ( int in cpp reserve 4 bytes, double reserve 8 bytes, ... )
- but the non-primitive data types reserve a dynamic amount of memory ( arrays , objects , strings, classes, ... )

- the last point i would like to mention in this section is :
* the primitive data types are stored in the ----> stack memory 
* the non-primitive data types are stored in the ----> heap memory

*** NOTE :
- stack memory and call stack are not the same thing 
- the stack memory is the actual region of memory where data is stored 
- call stack is the abstract/conceptual representation of the stack memory that keeps track of function calls.

______________________________________________________________________________________________________________________________________________________Second Part : 

********** what is memory heap ?

- in the previous section we said that the memory heap is the region of memory where the non-primitive data types are stored RIGHT ?

- But what is the memory heap exactly do ?
=> the memory heap is a region of memory used for dynamic memory allocation. 
=> It is an essential part of computer memory management, allowing programs to request and release memory during runtime.


********** how it works ?
- we can divide the memory heap into 3 parts :
1- dynamic memory allocation
2- memory deallocation and fragmentation
3- dynamic data structures 

______________________________________________________________________________________________________________________________________________________Third Part : 

**********  data structures :

- let's start with data structures :
- data structures are a way of organizing and storing data in a program. 
- they provide a means to efficiently access and manipulate data.
- memory heap uses 2 types of data structures : ( linked list , free list )

1- linked list :
=> it is simple and efficient data structure for storing a collection of objects 
=> each object in a linked list contains a pointer to the next object in the list. 
=> this allows the heap manager to quickly traverse the list and find free memory blocks.

2- free list :
=> it is more sophisticated data structure that can be used to improve the performance of memory allocation and deallocation. 
=> a free list is a collection of linked lists, each of which contains a list of free memory blocks of a certain size. 


********** dynamic memory allocation :

=> as we said in the linked list and free list they allow memory heap to quickly traverse the list and find free memory blocks.
=> but what we will do after finding the free memory block ??? 
=> we request this free memory block to the program 
=> the proccess of requesting a free memory block is called dynamic memory allocation.

SO : 
- dynamic memory allocation: 
=> dynamic memory allocation refers to the process of requesting and managing memory during runtime. 
=> It allows programs to allocate memory as needed
=> dynamic memory allocation is typically used when the size of memory required 
=> as you noticed the memory heap uses a dynamic data structures ( a data structures that can grow and shrink as needed )


let's see an example :
|--------------------------------|
| let x = 10;
| let obj = { a: 1, b: 2};
|--------------------------------|

- we know that the primitive data types are stored in the stack memory so , do you remember the call stack ?? 
- in the call stack his first component was variables environment ( which has all the information about all the variables in a specific scope )
- so what will happen ? 

1- the variable x will be stored in the stack memory ( because it is a primitive data type )
2- stack memory will have [ identifier : x -> value : 10 ]
3- the variable obj will be stored in the memory heap ( because it is a non-primitive data type )
4- but what will happen in the stack memory how will the variable enviorment will access it ? 
5- first of all we need to look for a free memory block in the memory heap
6- after we find it we will request it to the program
7- the program will give us the address of this free memory block
8- we will store this address in the stack memory
9- stack memory will have [ identifier : x -> value : 10 , identifier : obj -> value : "address we was given when we asked for a free memory block" ]
10- what about the object itself ? it will be stored in the memory heap
11- look at this picture for better explanation : link


********** memory deallocation :

=> it refers to the process of releasing memory that is no longer needed by a program. 
=> when memory is allocated dynamically during runtime, it is important to deallocate it when it is no longer required to avoid memory leaks 
=> if you don't know what is the memory leaks see the first article in this series
=> memory deallocation steps are : 
1- Identifying Memory to Deallocate: The first step in memory deallocation is identifying the memory that needs to be released. 
2- Marking Memory as Free: Once the memory to deallocate is identified, it is marked as free or available for reuse
3- Reclaiming Memory: After marking the memory as free, the operating system or memory management system can reclaim the memory (make it available for future allocations )


______________________CONCLUSION______________________

1- the primitive data types are stored in the stack memory
2- the non-primitive data types are stored in the memory heap
3- the memory heap uses dynamic data structures ( linked list , free list )
4- the memory heap uses dynamic memory allocation ( the proccess of requesting a free memory block )
5- the stack memory has the address of the non-primitive data types ( because they are stored in the memory heap )

______________________________________________________________________________________________________________________________________________________Fourth Part : 

********** memory fragmentation

=> it refers to the division of memory into small, non-contiguous blocks over time

- there are 2 types of memory fragmentation ( external fragmentation , internal fragmentation ) :
1- External Fragmentation:
=> external fragmentation occurs when free memory blocks are scattered throughout the memory space
=> it is difficult to find contiguous blocks of memory for larger allocations. 
=> It happens when memory is allocated and deallocated in a non-contiguous manner, leaving gaps between allocated blocks.

2- Internal Fragmentation: 
=> internal fragmentation occurs when allocated memory blocks are larger than necessary, resulting in wasted memory within the block. 
=> it happens when memory is allocated in fixed-size blocks, and the requested size is smaller than the allocated block size.

As a result : external and internal fragmentation can lead to inefficient memory utilization and reduced performance.


********** memory defragmentation

=>it refers to the process of rearranging memory blocks to reduce fragmentation and improve memory utilization. 
=> it involves consolidating free memory blocks to create larger contiguous blocks and reducing wasted memory within allocated blocks.

______________________________________________________________________________________________________________________________________________________Fifth Part : 

********** does dynamic non-primitive data types exist ?

=> the answer is YES and NO at the same time , CALM DOWN let me explain 
=> the dynamic non-primitive data types not exist in the memory , but how ? 
=> let's say we will create an vector in cpp , the vector is a dynamic non-primitive data type right ? ( vector<int>v; )
=> and let's say that operating system gave us the address of the free memory block in the memory heap to save this vector in it
=> what if we inserted a lot of elements in this vector and as a result the vector will need more memory ?
=> the memory heap uses the dynamic allocation and look for a new memory block with a bigger size and give us the address of it 
=> and our vector will be stored in the new memory block which has a new address and bigger memory size
=> but the question is : do you feel any of these changes ? NO , because the vector is still the same vector and you can insert any number of elements 
=> so when you use a dynamic non-primitive data type you don't feel any of these changes 
=> but in the background the memory heap is looking for a new space when you need more memory for your dynamic non-primitive data type

- so we can say that the dynamic non-primitive data types doesn't exist in the memory 
- but they only exist in the our usage and we don't feel any of these changes

______________________________________________________________________________________________________________________________________________________Sixth Part : 

********** pass by value Vs pass by reference

1- pass by Value: 
=> In pass by value, a copy of the value of the variable is passed to the function
=> any changes made to the parameter within the function do not affect the original variable 

let's see an example :
|---------------------------------------------------|
| function incrementValue(value) {
|   value++;
|  console.log("Inside function:", value);
| }
|
| let num = 5;
| console.log("Before function call:", num);
| incrementValue(num);
| console.log("After function call:", num);
|
| output :
| - Before function call: 5
| - Inside function: 6
| - After function call: 5
|---------------------------------------------------|

=> and as you can see the original value of the num variable didn't change even after we called the function incrementValue(num) 
=> because the function incrementValue(num) made a copy of the value of the variable num and passed it to the function
=> so the increment operation was applied on the copy of the value of the variable num not on the original variable num



2- pass by reference:
=>  In pass by reference, a reference to the variable is passed to the function. 
=> any changes made to the parameter within the function will affect the original variable

let's see an example :
|----------------------------------------------------------|
| function changeObject(obj) {
|    obj.name = "mohamed";
|    obj.age = 32;
| }
|
| let person = { name: "ahmed", age: 21 };
| console.log("Before function call:", person);
| changeObject(person);
| console.log("After function call:", person);
|
| output :
| - Before function call: { name: 'ahmed', age: 21 }
| - After function call: { name: 'mohamed', age: 32 }
|----------------------------------------------------------|

=> as you can see we used a non-primitive data type ( object ) and we passed it to the function changeObject(person)
=> do you remember when we talked about the non-primitive data types ? 
=> we said that they are stored in the memory heap and their address is stored in the stack memory
=> so when we try to modify the object in the function changeObject(person) we are going to the object which is in the heap using the reference in the stack memory
=> the reference took us to the object in the heap and we modified it successfully
=> so when we try to access the object outside the function we will find that it is modified because we modified the object in the heap not the copy of the object




- i think it is enough for this article because i want to have my food :D
- see you in the next article dude :) 

IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/

