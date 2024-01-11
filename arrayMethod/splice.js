const fruits = ["orange","apple","mango","dragon"]

// slice(index, noOfRemoveItems, Optional) - it can recieve countless parameters from the third like what we are want to add in the certain field
// it effect the main array

const result = fruits.splice(2,2,"pineapple","Tangerine")
console.log(result)
console.log(fruits)