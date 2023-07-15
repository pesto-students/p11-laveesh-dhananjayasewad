function findPairs(array, targetSum) {
  var pairs = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      var sum = array[i] + array[j];

      // Check if the sum equals the target sum
      if (sum === targetSum) {
        var pair = [array[i], array[j]];
        pairs.push(pair);
      }
    }
  }

  return pairs;
}

var array = prompt("Enter elements of the array separated by commas:").split(
  ","
);
var targetSum = parseInt(prompt("Enter the target sum:"));

array = array.map(Number);

var pairs = findPairs(array, targetSum);

console.log(pairs);
