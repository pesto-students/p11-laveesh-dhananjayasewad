function findNonDuplicateElement(array) {
  const noOfTimes = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (noOfTimes[element]) {
      noOfTimes[element]++;
    } else {
      noOfTimes[element] = 1;
    }
  }

  // Find the element with a frequency of 1
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (noOfTimes[element] === 1) {
      return element;
    }
  }
}

// enter the array elements
const userInput = prompt("Enter the array elements separated by spaces:");
const array = userInput.split(" ").map(Number);

const result = findNonDuplicateElement(array);
console.log("Non-duplicate element:", result);
