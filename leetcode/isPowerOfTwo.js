// let isPowerOfTwo = function (n) {
//   // a number is a power of two if there exist x that n == 2**x
//   for (let i = 0; i < n; i++) {
//     if (2 ** i == n) return true;
//   }
//   return false;
// };

let isPowerOfTwo = function (n) {
  if (n < 1) return false;
  if (n == 1) return true;
  if (n % 2 == 0) {
    return isPowerOfTwo(n / 2);
  } else {
    return false;
  }
};
