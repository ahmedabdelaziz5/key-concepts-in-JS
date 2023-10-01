/*

                                              we will go through the following points :
|-------------------------------------------------------------------------------------------------------------------|
| 1- what does the term prototypes refer to ?
| 2- what is oop , how many types are exsist and difference between them  ? 
| 3- what do we mean by saying language X is protype based ? 
| 4- exmples of prototype based languages and it's usage 
| 5- does js has classes ? 
| 6- prototype technique code sample , pros and cons                                                                                                                      
|--------------------------------------------------------------------------------------------------------------------|




______________________________________________________________________________________________________________________________________________________First Part : 

** what does the term prototypes refer to ? 

=>  a prototype is an object that serves as a template for other objects to be created from.
=> When a new object is created, it inherits all of the properties and methods of its prototype.

( we can say that the prototype is the parent of all objects that inherit from it and created form it )

______________________________________________________________________________________________________________________________________________________Second Part : 

** what is OOP ? 

=> Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to design applications and computer programs. 
=> OOP is a way of organizing code around data, or objects, rather than functions and logic. 
=> An object can be defined as a data field that has unique attributes and behavior. ( strucrt in c++ , js obj in javascript , ... )
=> main techniques/concepts of OOP : class/objects , inheritance , polymorphism , encapsulation, abstraction, ... 


** main types of OOP :

1- Class-based OOP : ( ex : c++, java, python, ...)
=> This is the traditional approach to OOP, where classes are used to define the structure and behavior of objects. 
=> Classes define the properties and methods that all objects of that class will have.

flow : 
- class -> object ( instance of the class has the same porperties and methods of the class )
- class B ---- inherit ----> class A ( child class has the same porperties and methods of the parent class where A is the parent class and B is the child class )
- objects can only created/inherit from classes not from other objects


2- Prototype-based OOP : ( ex : javascript, lua, self, io, ioke, ...)
=> prototypes are used to define the behavior of objects. 
=> When a new object is created, it inherits all of the properties and methods of its prototype.

flow :
- prototype -> object ( instance of the prototype has the same porperties and methods of the prototype )
- prototype B ---- inherit ----> prototype A ( child prototype has the same porperties and methods of the parent prototype where A is the parent prototype and B is the child prototype )
- objects can be created/inherit from other objects and prototypes


____________________________________________ conclusion : ____________________________________________________________

- as we said before when we went through the in first concept that JS is OOP based programming language and as we see JS use prototype based OOP
so we can say that JS is prototype based programming language
_____________________________________________________________________________________________________________________________________________________Third Part :

** what do we mean by saying language X is protype based ? 

=> a prototype-based language is a programming language that uses prototypes to define the behavior of objects.
=> prototype-based languages are different from class-based languages in that they do not have classes as we mentioned before

_____________________________________________________________________________________________________________________________________________________Fourth Part :

** exmples of prototype based languages :

=> JavaScript, Lua, Self, Io, Ioke


*** most common usage of prototype based languages :
 
=> Web development, Game development, Scripting, Research and experimentation


_____________________________________________________________________________________________________________________________________________________Fifth Part

** does js has classes ? 

=> the answer is no and yes at the same time !!!!! BUT HOOOOOOOOOW ? 

=> okay let's explain this : 
- as we said that js is prototype based language ( if you don't remember what is the difference between class based and prototype based please go back to the seccond part)
- also we said that js has no classes ( because it uses prototype-based OOP )
- i see you are confused now !!!!! because i said that js has no classes and you are saying that you can go to your IDE and type this code using ES6 : 

|-----------------------------------------------------------------------------------------------------|
| class Person {
|  constructor(name, age) {
|    this.name = name;
|    this.age = age;
|    }
|                                                                                                                                                                   
|  greet() {
|    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
| }
|
| }
| const person = new Person("Bard", 1);
|------------------------------------------------------------------------------------------------------|

and it will run without any errors , yeah thats's right but let me explain this :

-when you go to your IDE and type this code using ES6 and run it , the js engine will deal with it in the background as it is a prototype that has a constructor and a greet method which is not a real class !!!!!!! 
- so js doesn't have real classes but it has prototypes that has a constructor and methods and this is the way that js deal with classes in the background
- BUT WAHT ABOUT THE class keyword and the code that we typed using ES6 ????????????
- the class keyword is just a syntactic sugar that makes the code more readable and easier to write but it still not a real class this is the bad truth my young coder :( 

************ SO BACK TO OUR QUESTION : does js has real classes ? the answer is NO 
************ SO BACK TO OUR QUESTION : does js has classes ? the answer is YES 

_____________________________________________________________________________________________________________________________________________________Sixth Part


** prototype technique code sample : 

1- create a prototype object.
const studentPrototype = {
  study() {
    console.log(`${this.name} !!!! study hard `);
  },
};

2- create a new object from the prototype ( instance of the prototype)
const student = Object.create(studentPrototype);

3- Set the object's properties.
student.name = "AHMED";

4- Call the object's method.
student.study(); 

output -> "AHMED !!!! study hard "

** pros : 
1- Flexibility: Prototypes allow you to create new objects with slightly different behavior without having to create a new class.
2- Reusability: Prototypes allow you to reuse code by inheriting properties and methods from other objects.
3- Maintainability: Prototypes can make your code more maintainable by making it easier to see how objects are related to each other.

** cons : 
1- Performance: Prototypes can sometimes lead to performance problems if they are not used carefully.
2- Debugging: Prototypes can make debugging more difficult, as it can be hard to track down where a property or method is defined.




IF THIS EXPLANATION WAS HELPFUL PLEASE GIVE ME A STAR :)

*/

