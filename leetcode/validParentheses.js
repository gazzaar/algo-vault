let isValid = function (s) {
  let stack = [];
  let stackOfPrackets = ['()', '[]', '{}'];
  let openning = ['(', '[', '{'];
  let closing = [')', ']', '}'];
  for (let i = 0; i < s.length; i++) {
    if (openning.includes(s[i])) {
      stack.unshift(s[i]);
    } else if (closing.includes(s[i])) {
      if (stack.length === 0) return false;
      let pair = stack.shift().concat(s[i]);
      if (stackOfPrackets.includes(pair)) {
        continue;
      } else {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
};

console.log(isValid(['(', '[', ']', ')']));
