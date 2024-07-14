function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempsum = 0;
  if (arr.length < num) return;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempsum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempsum = tempsum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempsum);
  }
  return maxSum;
}
console.log(maxSubArraySum([1, 2, 3, 4, 9, 1, 3, 7, 6, 4], 3));
