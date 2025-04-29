/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  let string = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
