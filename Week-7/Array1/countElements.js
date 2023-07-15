function countElements() {
  var input = prompt("Enter the elements of the array (comma-separated):");

  var array = input.split(",");

  var count = array.length;

  return count;
}

var result = countElements();

console.log(result);
