function sum(num) {
 if (num.length > 0) {
  return num.reduce((a, b) => a + b)
 }
 return 0
}

console.log(sum([-2.398]))

