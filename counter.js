//function that takes a string and returns the unique characters in it. Also returns how many instances of each letter were found in the string.
// function needs to return an object that can represent the stats for the sentence it's given
//should return an object where each unique character encountered is property of the object and the value for the property

// var sentence = process.argv[2];
// var joinr = sentence.split(" ").join("");
// var str = joinr.toLowerCase("");
// console.log(str)

function countLetters(str) {
  var letterCounts = {}
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (letter !== " ") {
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }

  }
  return letterCounts;
}

console.log(countLetters("lighthouse in the house"));
// countLetters("lighthouse in the house")