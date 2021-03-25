``` 1 Explain Higher Order Functions with examples ```

## `HIGHER ORDER FUNCTIONS`
In Javascript, functions can be assigned to variables in
the same way that strings or arrays can. They can be
passed into other functions as parameters or returned
from them as well.
A “higher-order function” is a function that accepts
functions as parameters and/or returns a function.

```
const getEvenNumber = (n) => {
  return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is
  an even number: ${isNumEven}.`)
}

// Pass in getEvenNumber as the callback
function
printMsg(getEvenNumber, 4);
// Prints: The number 4 is an even
number: True.
```

```2 explain the map and reduce methods with examples ```

## .map()
The .map() method executes a callback function
on each element in an array. It returns a new array
made up of the return values from the callback
function.
The original array does not get altered, and the
returned array may contain different elements than the original array.
```
const finalParticipants = ['Taylor', 'Donald', 'Don','Natasha', 'Bobby'];
const announcements =
finalParticipants.map(member => {
return member + ' joined the
contest.';
})
console.log(announcements);
```

## .reduce()
The .reduce() method iterates through an array
and returns a single value.
It takes a callback function with two parameters
(accumulator, currentValue) as
arguments. On each iteration, accumulator is
the value returned by the last iteration, and the
currentValue is the current element.
Optionally, a second argument can be passed which
acts as the initial value of the accumulator.
Here, the .reduce() method will sum all the
elements of the array.

```const arrayOfNumbers = [1, 2, 3, 4];
const sumAllNumbers = arrayOfNumbers.reduce((accumulator,
currentValue) => {
return accumulator + currentValue;
});
console.log(sumAllNumbers); // 10
```