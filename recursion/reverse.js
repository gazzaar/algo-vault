function reverse(str) {
  if (str.length === 0) return '';
  return str.at(str.length - 1) + reverse(str.slice(0, -1));
}
console.log(reverse('gazzaar'));

// Another solution
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('anotherString'));
