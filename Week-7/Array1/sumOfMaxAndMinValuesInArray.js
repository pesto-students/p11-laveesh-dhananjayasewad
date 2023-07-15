function sumOfMaxAndMin(arr) {
  var numbers = arr.split(" ").map(Number);

  var max = numbers[0];
  var min = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return max + min;
}

var input = prompt("Enter numbers separated by spaces:");
var result = sumOfMaxAndMin(input);

console.log(result);
