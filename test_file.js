// Define the number of random numbers to generate
const numRandomNumbers = 5;

// Array to store the generated random numbers
const randomNumbers = [];

// Generate random numbers and store them in the array
for (let i = 0; i < numRandomNumbers; i++) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  randomNumbers.push(randomNum);
}

// Display the random numbers and classify them
for (let i = 0; i < randomNumbers.length; i++) {
  const num = randomNumbers[i];

  if (num < 25) {
    console.log(`Random number ${i + 1}: ${num} (Low)`);
  } else if (num >= 25 && num < 75) {
    console.log(`Random number ${i + 1}: ${num} (Medium)`);
  } else {
    console.log(`Random number ${i + 1}: ${num} (High)`);
  }
}
