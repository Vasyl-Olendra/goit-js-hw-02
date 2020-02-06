const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = 0;
  let longestIndex = -1;
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
      longestIndex = i;
    }
  }
  return words[longestIndex];
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
