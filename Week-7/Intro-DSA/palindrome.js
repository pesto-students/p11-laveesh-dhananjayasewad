var number = parseInt(prompt("Enter a number:"));

// Function to check if the number is a palindrome
function isPalindrome(number) {
  var originalNumber = number;
  var reversedNumber = 0;

  // Reverse the number
  while (number !== 0) {
    var digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
  }

  // Compare the original number with the reversed number
  if (originalNumber === reversedNumber) {
    return true; // Palindrome
  } else {
    return false; // Not a palindrome
  }
}

// Call the isPalindrome function with the user input
var palindrome = isPalindrome(number);

// Display the result
if (palindrome) {
  console.log("Yes"); // Palindrome
} else {
  console.log("No"); // Not a palindrome
}
