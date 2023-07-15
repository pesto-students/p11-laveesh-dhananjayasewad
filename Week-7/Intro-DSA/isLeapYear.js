var year = parseInt(prompt("Enter a year:"));

function isLeapYear(year) {
  // Check if the year is divisible by 4 and not divisible by 100, or divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Call the isLeapYear function
var leapYear = isLeapYear(year);

// Display the result
if (leapYear) {
  console.log("Yes"); // Leap year
} else {
  console.log("No"); // Not a leap year
}
