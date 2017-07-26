

function positioning(str) {
  var letterCounts = {}
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (letter !== " ") {
      if (letterCounts[letter]) {
        letterCounts[letter] = letterCounts[letter].concat(i)
      } else {
        letterCounts[letter] = [i]
      }
    }

  }
  return letterCounts;
}

console.log(positioning("lighthouse in the house"));
// countLetters("lighthouse in the house")