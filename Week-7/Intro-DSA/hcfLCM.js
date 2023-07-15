// Function to calculate the HCF (GCD) of two numbers using the Euclidean algorithm
function calculateHCF(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// Function to calculate the LCM of two numbers
function calculateLCM(a, b) {
  var hcf = calculateHCF(a, b);
  var lcm = (a * b) / hcf;

  return lcm;
}

// enter two numbers
var input = prompt("Enter two numbers separated by a space:").split(" ");
var number1 = parseInt(input[0]);
var number2 = parseInt(input[1]);

// Calculate the HCF and LCM
var hcf = calculateHCF(number1, number2);
var lcm = calculateLCM(number1, number2);

// Calculate the product of HCF and LCM
var product = hcf * lcm;

console.log(product);
