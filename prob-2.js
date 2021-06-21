const arrayRotation = (n, d) => n.slice(d).concat(n.slice(0, d));
const userInput = arrayRotation([1,2,3,4,5], 4)
console.log(userInput)