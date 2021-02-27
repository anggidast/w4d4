/**
 * =============
 * Array Mastery
 * =============
 *
 * 1. Buatlah function indexOf manual, function akan menerima 2 paramater array dan element yang dicari, dan mengembalikan index dari element tersebut, jika ada 2 element yang sama maka yang akan dikembalikan index yang pertama
 * contoh: console.log(indexOfManual([4, 7, 'kucing', 1, 3, 'kucing', 5], 'kucing'))
 * output: 2
 * * contoh: console.log(indexOfManual([4, 7, 'kucing', 1, 3, 'kucing', 5], 'naga'))
 * output: -1
 */

function indexOfManual(arr, el) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == el) {
      result = i;
      break;
    } else {
      result = -1;
    }
  }
  return result;
}

// console.log(indexOfManual([4, 7, 'kucing', 1, 3, 'kucing', 5], 'kucing'));
// console.log(indexOfManual([4, 7, 'kucing', 1, 3, 'kucing', 5], 'naga'));

/**
 *
 * 2. Buatlah function majoritySweeper yang akan menghilangkan angka yang sering muncul pada suatu array
 * contoh: console.log(majoritySweeper([4,4,4,4,1,2,3,3,7]))
 * output: [1,2,3,3,7]
 */
function majoritySweeper(arr) {
  const result = [];
  let tmp = 0;
  let theMost = 0;
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      counter++;
    } else {
      counter = 1;
    }
    if (counter > tmp) {
      tmp = counter;
      theMost = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != theMost) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(majoritySweeper([4, 4, 4, 4, 1, 2, 3, 3, 7]))

// function majoritySweeper(arr) {
//   const result = [];
//   let tmp = 0;
//   let theMost = [];
//   let counter = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//       counter++;
//     } else {
//       counter = 1;
//     }
//     if (counter == tmp) {
//       theMost.push(arr[i]);
//     }
//     if (counter > tmp) {
//       tmp = counter;
//       theMost.push(arr[i]);
//     }
//     // console.log('lebih ' + theMost, tmp);
//     console.log(theMost, tmp);
//   }
//   // console.log(theMost);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < theMost.length; j++) {
//       if (arr[i] != theMost[j]) {
//         result.push(arr[i]);
//       }
//     }
//   }
//   // return result;
// }


/*
 * 3. Buatlah function duplicateSweeper yang akan menghilangkan nilai duplikat pada suatu array
 * contoh: console.log(duplicateSweeper([4,4,1,2,3,4,3,7,4]))
 * output: [4,1,2,3,7]
 */

function duplicateSweeper(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] != result[j]) {
        counter++;
      }
    }
    if (counter == result.length) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(duplicateSweeper([4, 4, 1, 2, 3, 4, 3, 7, 4]));

/*
 * 4. Buatlah function getBoardNumbers yang menerima 1 parameter berupa number, function akan mengembalikan array multidimensi sesuai berikut
 * contoh: console.log(getBoardNumbers(3))
 * [
 *    [1, 2, 3],
 *    [4, 5, 6],
 *    [7, 8, 9]
 * ]
 *
 */

function getBoardNumbers(num) {
  let result = [];
  let value = 0;
  for (let i = 0; i < num; i++) {
    let arr = [];
    for (let j = 0; j < num; j++) {
      value++;
      arr.push(value);
    }
    result.push(arr);
  }
  return result;
}

// console.log(getBoardNumbers(3))

/*
 * 5. Buatlah function getBoardStarNumbers yang menerima 1 parameter berupa number, function akan mengembalikan array multidimensi sesuai berikut
 * contoh: console.log(getBoardStarNumbers(3))
 * [
 *    [1, *, 3],
 *    [*, 5, *],
 *    [7, *, 9]
 * ]
 */

function getBoardStarNumbers(num) {
  let result = [];
  let value = 0;
  for (let i = 0; i < num; i++) {
    let arr = [];
    for (let j = 0; j < num; j++) {
      value++;
      if (value % 2 == 0) {
        arr.push('*');
      } else {
        arr.push(value);
      }
    }
    result.push(arr);
  }
  return result;
}

console.log(getBoardStarNumbers(3))