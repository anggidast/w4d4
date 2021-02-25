function countChar(str) {
  // 👇 your code here 👇
  // ! input -> string
  // ! output -> object
  let result = {}
  // ? modifikasi result
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    // * jika tidak maka buat dan isi dengan angka 1
    if (result[str[i]] === undefined) { // terjadi pengecekan key apakah hasilnya undifined
      // kalau gak ada
      // console.log('disini ternyata benar bahwa di obj keynya belum ada', result[str[i]])
      result[str[i]] = 1
    } else {
      // * berarti key udah ada
      result[str[i]]++
    }
    // * ada maka tambah
    // result[str[i]] = 1
  }

  return result
}

console.log(countChar('ffflex      armenian'))
/**
{
  f: 3,
  l: 1,
  e: 1,
  x: 1
}
*/



















console.log(countChar('armenian'))
/**
{
  a: 2,
  r: 1,
  m: 1,
  e: 1,
  n: 2,
  i: 1
}
 */