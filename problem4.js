function maxSequence(arr) {

  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; i < j; j--) {
      let arrSlice = arr.slice(i,j)

      if (arrSlice.length>1) {
        const arrReduce = arrSlice.reduce((a,b) => a + b)

        if (!obj[arrReduce]){
          obj[arrReduce] = arrSlice;
        }
      }
    }
  }
  let keyObj = Object.keys(obj).sort((a,b) => b-a)
  let akhir = keyObj[0]

  return akhir
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6]))   // 7
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3]))   // 7
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6]))   // 8
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6]))    // 12

