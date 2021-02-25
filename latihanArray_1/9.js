/*
================
Array Mapper
================

[INSTRUCTIONS]

arrayMapper adalah sebuah function yang menerima tiga parameter.
Parameter pertama adalah sebuah array yang bisa terdiri dari tipe data apapun.
Parameter kedua adalah simbol matematika, penambahan, atau simbol pembanding.
Parameter ketiga adalah nilai yang akan menjadi efek operasi atau pembanding.

Untuk setiap nilai array, isi dari masing-masing array akan di operasikan dengan simbol dan effect.

Simbol +, -, *, dan / akan menjalankan proses matematika pada angka.
Simbol === akan membandingkan angka dengan parameter ketiga

Contoh:

targetArr: [1, 2, 3, 4, 5]
operator: +
effect: 5

maka, setiap isi array akan ditambahkan dengan 5, sehingga,
output: [6, 7, 8, 9, 10]

Contoh 2:
targetArr: [1, 2, 1]
operator: -
effect: 3

maka, setiap isi array akan dipangkatkan dengan 3, sehingga,
output: [1, 0, 1]

[RULE]
- Dilarang menggunakan sintaks .map() !
- Dilarang menggunakan sintaks eval()!
- Dilarang menggunakan rekursif

*/


function arrayMapper(targetArr, operator, effect) {
  // only write code here
}

console.log(arrayMapper([1, 5, 3, 4], '+', 1)); // [2, 6, 4, 5]
console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]
console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
console.log(arrayMapper([1, 3, 3], '===', 3)); // [false, true, true]
