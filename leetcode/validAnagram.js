function isAnagram(a, s) {
  if (a.lenght !== s.lenght) return false;
  let frequenciyCounter1 = {};
  let frequenciyCounter2 = {};
  setCounter(frequenciyCounter1, a);
  setCounter(frequenciyCounter2, s);

  for (let key in frequenciyCounter1) {
    if (!(key in frequenciyCounter2)) return false;

    if (frequenciyCounter2[key] !== frequenciyCounter1[key]) return false;
  }

  return true;
}

function setCounter(obj, word) {
  for (let i = 0; i < word.length; i++) {
    obj[word.at(i)] = (obj[word.at(i)] || 0) + 1;
  }
}

console.log(isAnagram('car', 'rat'));
