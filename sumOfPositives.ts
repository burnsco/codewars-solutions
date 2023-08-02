// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  const result =  arr.filter(x => x > 0)
  if (result.length < 1) return 0
  return result.reduce((a, b) => a + b)
}


console.log(positiveSum([-1,-2,-3,-4,-5]))
