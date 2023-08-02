// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

function countSheeps(arrayOfSheep) {
  let count: number = 0;

  arrayOfSheep.forEach(sheep => {
    if (sheep !== null || sheep !== undefined){
      if (sheep) count++
    }
  })
  return count
}

const test = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

console.log(countSheeps(test))
