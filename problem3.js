function primaSegiEmpat(wide, high, start) {

  let result = ""
  let jumlah = 0
  let i = start
  let count = 0

  while (count < wide*high) {
    i++;

    if( i == 2 || i == 3 || i == 5 || i == 7 ) {
      result += `${i}`
      jumlah += i
      count++ 

      if (count%wide === 0) {
        result += "\n"
      }
    }

    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
      result += `${i}`
      jumlah += i
      count++

      if (count%wide === 0) {
        result += "\n"
      }
    }
  }
  console.log(result)
  console.log(jumlah)
}

primaSegiEmpat(2, 3, 13)
/*
17 19
23 29
31 37
156
*/
primaSegiEmpat(5, 2, 1)
/*
2  3  5  7 11
13 17 19 23 29
129
*/

