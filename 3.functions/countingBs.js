function countChar(str, letter) {
  var counted = 0;
  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) == letter)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
