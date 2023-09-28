/*

- if we tried to open dev tools in the browser, we would see that the garbage collector is running every 1 second

- without garbage collector, we would have to manually free up memory maually and this may cause memory leaks

- example on memory leak in javascript -> try to open dev tools and to type this function in the console : 

*/


function memoryLeak() {
    this.variable = 'variable';
}

// - then try to invoke the function by calling it in the console : 

function memoryLeak() {
    this.variable = 'variable';
}

memoryLeak();

/*

- after invoking the function try typing ${window} in the console -> this will return the window object

- open the window obj you will see that the variable is there and it is not deleted from the memory after the function is invoked and this is a memory leak
and this is because uneffient usage of memory in javascript

- to solve this problem we need to delete the variable from the memory after the function is invoked

- garbage collector is a process that runs in the background and it is responsible for freeing up memory that is no longer used so that the memory can be reused
and no memeory leaks will happen


*/

