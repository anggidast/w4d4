function groupByAge(arr) {
  let output = {};
  const currentYear = 2020;
  let arrAge = [];
  for (let i = 0; i < arr.length; i++) {
    let age = currentYear - arr[i];
    if (output[age] == undefined) {
      output[age] = 1;
    } else {
      output[age]++;
    }
    // arrAge.push(age);
  }
  return output
}

console.log(groupByAge([2003, 1991, 1821, 2003, 1821, 1995, 1995]))

/**
 * {
 *  17: 2,
 *  29 : 1,
 *  199: 2,
 *  25: 2
 * }
 */