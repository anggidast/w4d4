/*
* Buatlah fungsi dengan nama kompilasi, dengan parameter input array 2 dimensi seperti pada contoh. Fungsi bertugas untuk membuat rekap data dalam bentuk object, dimana semua data akan dikelompokkan berdasarkan jurusan. Bentukan output dapat dilihat pada contoh

Contoh :

[
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]

output :
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
*/
// 👇 your code here 👇
function kompilasi(inputArr) {
  // ! input -> array 2D
  // ! output -> object
  // buat untuk output
  let output = {}
  for (let i = 0; i < inputArr.length; i++) {
    // lokasi nya sama: i
    let jurusan = inputArr[i][0]
    let nama = inputArr[i][1] // string
    // ? ngisi key dan value secara dinamis
    if (output[jurusan] !== undefined) {
      // kalau ada
      output[jurusan].push(nama)
    } else {
      // belum ada
      // ngebuat dan diisi langsung
      let arrayNama = [nama]
      output[jurusan] = arrayNama
      // output[jurusan] = []
      // output[jurusan].push(nama)
    }
    // console.log('ketika ', i, '==', output)
  }
  // let output = {
  //   Biologi: [],
  //   Fisika: [],
  //   Akuntansi: []
  // }
  // Static
  // // ! proses -> ngolah2 outputnya
  // for (let a = 0; a < inputArr.length; a++) {
  //   // * proses pencarian
  //   // console.log('jurusan: ', inputArr[a][0])
  //   // console.log('nama: ', inputArr[a][1])
  //   // * proses pemasukan ke output berasarkan jurusan
  //   // if (output == inputArr[a][0]) {
  //   //   console.log('masuk')
  //   // }
  //   let jurusan = inputArr[a][0]
  //   let nama = inputArr[a][1]

  //   output[inputArr[a][0]].push(nama)
  //   // output[jurusan] = nama  // diganti - re assign
  //   // console.log('ini loop ke->', a, output)
  // }
  // kembaliin output
  return output
}

const input = [
  //   0           1
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
  ['Bahasa', 'Rizki']
]

// console.log(input[0][0])

console.log(kompilasi(input))
/**
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
 */
