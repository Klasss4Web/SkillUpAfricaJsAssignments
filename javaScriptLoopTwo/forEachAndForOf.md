## `DIFFERENCE BETWEEN FOREACH AND FOR...OF`
```
for ( club of footBallClubs ) {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
}
 
footBallClubs.forEach((club) => {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
})
```
Both the `forEach loop and the for ...of loop` would produce thesame result for used in thesame array. The difference lies in the syntax used in both methods. `forEach` accepts a callback function which describes what and the required elements of the array should be outputted. While the `for ..of` is a direct approach that does not require any function in order to carry out the instruction of the statement in the body of the method.