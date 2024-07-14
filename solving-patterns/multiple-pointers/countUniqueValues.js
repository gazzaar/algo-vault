function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let firstValue = 0;
  for (let secondValue = 1; secondValue < arr.length; secondValue++) {
    if (arr[firstValue] !== arr[secondValue]) {
      firstValue++;
      arr[firstValue] = arr[secondValue];
    }
  }
  return firstValue + 1;
}

console.log(countUniqueValues([1, 1, 2, 2, 4, 4, 5, 6, 8]));
