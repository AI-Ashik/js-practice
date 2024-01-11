const numbers = [1,2,5,3,6]

// it doesnt effect the original array
const num = numbers.reduce((total,currentValue)=>{
return total + currentValue
},0)

console.log(num)