const test = false;

// if the value is null or undefiend then it will print the right side value
console.log(test ?? "JS")
// if the value is falsy then it will print the right side value
console.log(test || "JS")
// if the value is truthy then it will print the right side value
console.log(test && "JS")