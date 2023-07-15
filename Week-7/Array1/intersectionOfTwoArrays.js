function findIntersection(array1, array2) {
  var set = new Set(array1);

  var intersection = [];

  // Iterate over the elements of array2
  for (var i = 0; i < array2.length; i++) {
    var element = array2[i];

    // Check if the element exists in the Set
    if (set.has(element)) {
      intersection.push(element);
      set.delete(element);
    }
  }

  return intersection;
}

var array1 = prompt(
  "Enter elements of the first array separated by commas:"
).split(",");
var array2 = prompt(
  "Enter elements of the second array separated by commas:"
).split(",");

array1 = array1.map(Number);
array2 = array2.map(Number);

var intersection = findIntersection(array1, array2);

console.log(intersection);
