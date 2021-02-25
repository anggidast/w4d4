// ? Review Object
//                 //

const rumah = {
  pintu: {
    bahan: "kayu",
    warna: "merah"
  },
  jumlahJendela: 0
}

console.log(rumah)

// nambahin jika dia gak ada keynya isinya 0. tapi kalau ada tambahin 1 di valuenya
if (rumah.jumlahJendela === undefined) {
  // berarti keynya belum ada
  rumah.jumlahJendela = 0
} else {
  // nambahin 1
  rumah.jumlahJendela += 5 // += 1 // = rumah.jumlahJendela + 1
}

console.log(rumah)


// let key = 'pintu'
// console.log(rumah['pintu'].warna)

// rumah = {
//   pintu: {
//     bahan: "kayu",
//     warna: "merah"
//   },
// }

// nambah
// rumah.lantai = 'keramik'
// ngeganti value
// rumah.pintu.warna = "hijau"



// console.log(rumah)


// // * cara mengetahui key tersebut ada atau tidak
// console.log(rumah.lantai)


// let a = [1, 2, 3]

// console.log(a[4])