 /**
  * Objective: Memahami pengecekan data di dalam object
  *
  * Misalkan kita memiliki sebuah object seperti ini
  * {
  *  name: 'Kosasih',
  *  grade: 90
  * }
  *
  * Buatlah sebuah fungsi yang akan melakukan pengecekan apakah sebuah property ada di dalam object
  */
 function hasProperty(obj, key) {
   if (obj[key] != undefined) {
     return true;
   }
   return false;
 }
 console.log(
   hasProperty({
       name: 'Kosasih',
       grade: 90
     },
     'grade'
   )
 ) // true
 console.log(
   hasProperty({
       name: 'Kosasih',
       grade: 90
     },
     'gender'
   )
 ) // false
 /**
  * Objective: Grouping collection of data into an object
  *
  * Kosasih memiliki sebuah peternakan dengan kumpulan hewan sebagai berikut
  * [ 'Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']
  *
  * Buatlah sebuah fungsi yang akan menerima input sebuah array seperti diatas, dan akan mengembalikan
  * Sebuah object jumlah hewan yang dimiliki oleh Kosasih dikelompokan berdasarkan namanya.
  * Liat driver code untuk output yang lebih jelas
  */
 function groupAnimal(array) {
   let obj = {};
   for (let i = 0; i < array.length; i++) {
     if (obj[array[i]] == undefined) {
       obj[array[i]] = 1;
     } else {
       obj[array[i]]++;
     }
   }
   return obj;
 }
 console.log(groupAnimal(['Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']))
 /**
  * {
  *  Ayam: 2,
  *  Kuda: 2,
  *  Bebek: 1
  * }
  */