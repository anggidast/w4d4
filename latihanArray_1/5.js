function uniqueValue(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let same = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] == arr[i]) {
        same = true;
      }
    }
    if (same == false) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(uniqueValue(['Sepatu', 'Sepatu', 'Meja', 'Meja'])) // [ 'Sepatu', 'Meja']
console.log(uniqueValue(['Baju', 'Penghapus', 'Penghapus', 'Sepatu', 'Penghapus']))
// ['Baju', 'Penghapus', 'Sepatu']