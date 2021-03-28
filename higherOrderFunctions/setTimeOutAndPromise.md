`* Explain the setTimeout Function with example *`

## SetTimeout()
The setTimeout() function is one of `JavaScript` inbuilt functions. It is used to set a timer which executes a program once the time elapse. Its a higher order function which accepts two arguments, `a callback function` as the first argument and `the timer` in milliseconds as the second argument. Example of an application of the setTimeout function can be seen below;

```
setTimeout(addItemToList, 3000)

const addItemToList = (arr, item) => {
  const addItemToArray = arr.push(item)
  return addItemToArray
} 
```

The above program (addItemToList) would execute three seconds after it is called. i.e an item would be added to the array (list) three seconds after it is called.




``` *Explain Promise With Examples*```

## Promise
Promise in JavaScript is used to make a promise to do something, usually asynchronously. There is usually a fulfillment or failure of promise once the task completes. Promise is a constructor function which takes a function as argument, which in turn takes in two parameters; `resolve` and `reject`, these are methods used to determine the outcome of the promise.
The syntax for JavaScript Promise looks like this:

```
const myPromise = new Promise((resolve, reject) => {

})
```

The above Promise would remain in a pending state because there is no way for the Promise to be completed, to complete a promise, we add the `resolve` and `reject` methods.

`resolve` is used when you want your `Promise` to succeed or to be fulfilled, while `reject` is used when you want your `Promise` to fail

```
const makeServerRequest = new Promise((resolve, reject) => {

  let responseFromServer;
  if(responseFromServer) {
    resolve("The data will arrive in a seconds")
  }else{
    reject("Sorry boss, your Request was rejected")
  }
})

```
The above codes illustrates using `Promise` to make a server request, and after it completes, the retrieved data would be needed to do something, to achieve this, the `.then` method is used. The `.then` method is executed immediately after a Promise is fulfilled with `resolve`, for example

```
makeServerRequest.then(result => {
  console.log(result)
})
```
Likewise, you might want to carry out an action once a Promise is rejected. To handle a rejected Promise, we use the `.catch` method, which takes is a parameter, usually error.

```
makeServerRequest.catch(error => {
  console.log(error)
})
```