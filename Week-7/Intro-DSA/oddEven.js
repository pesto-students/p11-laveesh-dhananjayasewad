var number = parseInt(prompt("Enter a number:"));

// Function to check if the number is even or odd
function checkEvenOdd(number) {
  // Check if the number is divisible by 2 using the modulus operator
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Call the checkEvenOdd function with the user input
var result = checkEvenOdd(number);

// Display the result
console.log(result);
