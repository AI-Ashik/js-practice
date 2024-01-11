const fruits = ["orange","apple","mango","dragon"]

// it only return single value (the first vlaue that he finds , it dosent effect the main array)
const result = fruits.find((f)=> (f==="orange") || (f==="apple"))
console.log(result)