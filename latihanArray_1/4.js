function multiplyEverything(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
console.log(multiplyEverything([1, 2, 3, 4])) // [2, 4, 6, 8]