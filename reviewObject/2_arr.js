function countChar(str) {
  // 👇 your code here 👇
  // ! input -> string
  // ! output -> array 2D
  let hasil = []

  // * modifikasi hasil
  // ketika mau isi array tapi gak boleh doble
  // ngecek di hasil
  // ketika ada maka nambahin
  // ketika gak ada maka buat baru (push([isi]))
  for (let i = 0; i < str.length; i++) {
    let ketemu = false
    // console.log(str[i])
    // !tanpa pengecekan
    // dilooping isi array
    // // init si hasil
    // hasil = []
    for (let j = 0; j < hasil.length; j++) {
      // console.log(hasil[j][0])
      // pengecekan terhadapa value yang sama dengan karakter
      if (hasil[j][0] == str[i]) {
        // console.log('sekali', str[i])
        // kalau ada
        hasil[j][1] += 1
        ketemu = true
      }
      // ternyata mengulang sangat banyak
      // else {
      //   console.log('eh  masuk', str[i])
      //   hasil.push([str[i], 1])
      // }
    }
    // harus ada konfirmasi dari pengecekan undefined
    if (ketemu === false) {
      let huruf = str[i]
      hasil.push([huruf, 1])
    }
    console.log(i, str[i], '==', hasil)
  }

  return hasil
}

console.log(countChar('fflex'))
/**
[
  ['f', 2],
  ['l', 1],
  ['e', 1],
  ['x', 1],
]
*/

// console.log(countChar('armenian'))
/**
[
  ['a', 2],
  ['r', 1],
  ['m', 1],
  ['e', 1],
  ['n', 2],
  ['i', 1]
]
 */