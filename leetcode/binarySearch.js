/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = nums[mid];
    if (guess === target) {
      return mid;
    } else if (guess < target) {
      low = mid + 1;
    } else if (guess > target) {
      high = mid - 1;
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6, 7], 7));
