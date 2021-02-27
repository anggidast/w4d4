// Diberikan sebuah array of number. Tugas kalian adalah memisahkan angka2 tersebut sesuai dengan kelompoknya, ganjil, genap, atau kelipatan 3. Buatlah sebuah function dengan nama bebas, dan parameter inputnya adalah array yang akan di olah.

// Contoh :
// input : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// output :
// {
//   genap: [2, 4, 8, 10],
//   ganjil: [1, 5, 7],
//   tiga: [3, 6, 9]
// }

// input : [1, 3, 5]
// output :
// {
//   genap: [],
//   ganjil: [1, 5],
//   tiga: [3]
// } 

function numberGroup(arr) {
  const result = {
    genap: [],
    ganjil: [],
    tiga: [],
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      result.tiga.push(arr[i]);
    } else if (arr[i] % 2 == 0) {
      result.genap.push(arr[i]);
    } else if (arr[i] % 2 == 1) {
      result.ganjil.push(arr[i]);
    }
  }
  return result;
}

console.log(numberGroup([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(numberGroup([1, 3, 5]));