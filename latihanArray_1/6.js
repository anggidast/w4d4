/**
 * ======
 * Genap and Reverse
 * ======
 *
 * Buatlah sebuah function yang akan menerima satu parameter sebuah array berisi angka.
 *
 * Output dari function ini adalah angka angka yang genap dengan urutan yang dibalik dari urutan yang dibuat sebelumnya
 */

function evenAndReverse(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 == 0) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(evenAndReverse([1, 2, 3, 4, 5])) // [4, 2]
console.log(evenAndReverse([10, 9, 8, 7, 6, 5, 4])) // [4, 6, 8, 10]