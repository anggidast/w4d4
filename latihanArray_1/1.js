function leftRotation(array, count) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[count + i] === undefined) {
      for (let j = 0; j < count; j++) {
        arr.push(array[j]);
      }
      break;
    } else {
      arr.push(array[count + i]);
    }
  }
  return arr;
}

console.log(leftRotation([0, 1, 2, 3, 4, 5], 1)) // [ 1, 2, 3, 4, 5, 0]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 2)) // [ 2, 3, 4, 5, 0, 1 ]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 3)) // [ 3, 4, 5, 0, 1, 2 ] 