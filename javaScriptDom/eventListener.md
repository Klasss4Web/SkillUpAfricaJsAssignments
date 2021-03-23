# ```EVENT LISTENERS```
To create interactivity, we act on events. When a user interacts with something on a page, one or more event will be fired. Clicking on a button will trigger a click event. JavaScript has a built in method used to create interactivity in a website. its called 'eventListener', this method takes in two arguments, the type of event(click, submit, mouseover etc) which is a string and a function. The event type is the action that would be taken by the user/client on the web page while the callback function would determine the response of that will be returned when the event is triggered. We can add event listener to a page using the following syntax
```
document.getElementById(btn).addEventListener('click', function(){

})
```
### ```EXAMPLES OF EVENTS```
```
button.addEventListener('click', returnHelloWorld);

function returnHelloWorld(){
  return 'Hello World';
}
```
The above event is a click event. It would fire when the button attached to the event listener is clicked, calling the function 'returnHelloWorld'.
