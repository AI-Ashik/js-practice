const fruits = ["orange","apple","mango","dragon"]

// it only return the index of the value(the first vlaue that he finds , it dosent effect the main array)
const result = fruits.findIndex((f)=> (f==="orange"))
console.log(result)