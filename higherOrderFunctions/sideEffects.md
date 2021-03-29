` * Explain Side Effects *`

## Side Effects
A `Side Effect` is any application state change that is observable outside the called function other than its return value.
`Side Effects` are mostly avoided in `Functional Programming` which makes the effects of a program much easier to understand, and much easier to test. Keeping `Side effects` separate from the rest of your program logic, will enable your softtware to be much easier to extend, refactor, debug, text, and maintain.

#### ```Exaples of Side Effects```
Below are some of the examples of `Side Effects` in JavaScript
*  Modifying any external variable or object property (e.g., a global variable or a variable in the parent function scope chain). for example, the function (mutatePassedArray) below would result in a `side effect` because it would change the original state of any array passed as argument through it:
  ```
  const myList = ['bag', 'pen', 'phone', 'laptop', 'books']

  const mutatePassedArray = (arr) => {
    return arr.pop()
  }
  
  console.log(mutatePassedArray(myList))
  //returns 'books'
  
  console.log(myList)
  //returns ['bag', 'pen', 'phone', 'laptop' ]
  ```
*  Logging to the console:
```
  for(let index = 0; index <=10; index++) {
    console.log(index)
  }
```
*  Writing to a file
*  Writing to the screen
  The function below would collect data from an input field and display it somewhere else in the page which would be displayed on the screen for the user.
```
  function returnVisitorsName(e) {
    let input = document.getElementById('inputField').value
    let output = document.getElementById('outputDiv')
    input = output
  }
```
*  calling any function with side effects
  Most event listeners involve calling a function whose only purpose is to create a side effect and produce interractivity on a website.
```
  document.getElementById('btn').addEventListener('submit', returnVisitorsName) 
```


