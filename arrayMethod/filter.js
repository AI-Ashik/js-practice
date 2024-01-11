const fruits = ["orange","apple","mango","dragon"]

// it can return multple value (filtered out the conditional values)
const result = fruits.filter((f)=> (f==="orange") || (f==="apple"))
console.log(result)