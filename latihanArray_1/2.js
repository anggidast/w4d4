function reverseMe(str) {
  str = str.toString();
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(parseInt(str[i]));
  }
  return result;
}
console.log(reverseMe(348597)) // [ 7, 9, 5, 8, 4, 3]