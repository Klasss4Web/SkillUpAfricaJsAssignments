//Create You Own Higher Order Function

const clonedArrayFunction = (arr) => {
  let clonedArray = [...arr].pop();
   return clonedArray;
}

const addItemsToList = (array, arrayFunction) => {
  console.log(arrayFunction(array))
  return arrayFunction(array)
}

let myList = ['books', 'pens', 'laptop', 'bags']

 addItemsToList(myList, clonedArrayFunction)
