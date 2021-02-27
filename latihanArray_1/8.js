/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(fishes) {
  let result = '';
  let arr = [];
  for (let i = 0; i < fishes.length; i++) {
    let fish = fishes[i][0] + fishes[i][1] + fishes[i][2] + fishes[i][3];
    if (fish == 'ikan') {
      arr.push(fishes[i]);
    }
  }
  if (arr.length == 0) {
    return 'tidak ada data';
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        result += `${arr[i]}, `;
      } else {
        result += `dan ${arr[i]}`;
      }
    }
  }
  // console.log(arr);
  return result;
}

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data