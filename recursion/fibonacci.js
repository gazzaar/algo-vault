function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(0));

// Solution for TOP
function fibs(num) {
  function innerFib(num, arr) {
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (num <= 2) return arr;
    let nextFib = arr[arr.length - 1] + arr[arr.length - 2];
    return innerFib(num - 1, [...arr, nextFib]);
  }
  return innerFib(num, [0, 1]);
}
console.log(fibs(0));
