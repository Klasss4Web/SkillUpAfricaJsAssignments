# LOOPs

## INFINITE LOOPS
An infinite loop is a sequence of instructions will continue to execute endlessly unless and external intervention occurs('pull the plug). In this kind of loop, the condition is always true, and the loop will never reach an end. Below is an example of infinite loop written in javaScript.

for(let i = 5; i > 1; i++) {
  console.log('I am an infinite loop')
}

## FOR LOOP
In computer science, for loop is a control statement for specifying iteration, which allows code to execute repeatedly. A for loop has two parts: a header specifying the iteration, and a body which is executed once per iteration. The header often declares an explicit loop counter or loop variables, which allows the body to know which iteration is being executed.
Below is an example of a for-loop:

for(let index = 1; i<= 10; i++) {
  console.log('This is a for loop');
}

## FOREACH
The .forEach() method executes a callback function on each of the elements in an array in order. Here, the callback function containing a console.log() method will be executed 5 times, once for each element.

const numbers = [28, 77, 45, 99, 27];
numbers.forEach(number => {
console.log(number);
});

## FOR OFF
The for...of statement creates a loop iterating over iterable objects, including built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

for(variable of iterable) {
  statement
}

const arrayOfFruits = ['mango', 'pawpaw', 'orange', 'banana']

for(const value of arrayOfFruits) {
  console.log(value)
}

for(let value of iterable) {
  console.log('we love ' + value)
}

const iterable = 'boose'

for(const value of iterable) {
  console.log(value)
}

const iterable = [10, 20, 45, 60]

for(let value of iterable) {
  value += 1;
  console.log(value)
}

