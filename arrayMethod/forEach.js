const fruits = ["orange","apple","mango","dragon"]

const result = fruits.forEach((f)=>{
    if (f === "apple") {
        fruits.pop() // 3 will be deleted from array
    }
})
console.log(fruits)