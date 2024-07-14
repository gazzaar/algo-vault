function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// Array must be sorted
console.log(sumZero([-11, -9, -6, -5, -3, 0, 1, 2, 3, 4, 5, 7, 9]));
