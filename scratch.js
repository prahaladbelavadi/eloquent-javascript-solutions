// Abstracting array traversal
var array = [1, 2, 3];

for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

console.log('Neew');

function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logEach(array);
