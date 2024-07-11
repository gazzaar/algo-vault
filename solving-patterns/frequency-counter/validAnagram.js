function validAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;
  const frequenciyCounter1 = {};
  const frequenciyCounter2 = {};

  setCounter(frequenciyCounter1, word1);
  setCounter(frequenciyCounter2, word2);

  for (let key in frequenciyCounter1) {
    if (!(key !== frequenciyCounter2)) return false;

    if (frequenciyCounter2[key] !== frequenciyCounter1[key]) return false;
  }

  return true;
}
function setCounter(obj, word) {
  for (let i = 0; i < word.length; i++) {
    obj[word.at(i)] = (obj[word.at(i)] || 0) + 1;
  }
}

console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('', ''));
