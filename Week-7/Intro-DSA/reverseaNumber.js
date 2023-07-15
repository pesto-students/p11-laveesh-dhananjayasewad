//enter a number
var number = parseInt(prompt("Enter a number:"));

// Function to reverse the number
function reverseNumber(number) {
  var reversedNumber = 0;

  // Reverse the number
  while (number !== 0) {
    var digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
  }

  return reversedNumber;
}

// Call the reverseNumber function with the user input
var reversedNumber = reverseNumber(number);

console.log(reversedNumber);
