function sum(text, ...rest) {
  const result = rest.reduce((total, currentValue) => total + currentValue, 0);
  console.log(`${text} ${result}`)
}

sum("The sum is ", 4, 4, 4, 5, 6, 7, 5);
