function towsum(nums, target) {
  let sums = {};

  let x, y;
  for (let i = 0; i < nums.length; i++) {
    x = nums[i];
    y = target - x;

    if (sums[y] !== undefined) {
      return [sums[y], i];
    }
    sums[x] = i;
  }
}

console.log(towsum([1, 2, 3, 4, 5], 4));
