const assertEquals = require('../test-framework');
const countEvenNumbers = require('../src/countEvenNumbers');

const testName = 'Test: number of even numbers within an array';
console.log(testName + '\n');

//Set up
let input = [1, 2, 3, 4, 5, 6];
let expectedOutput = 3;

//Execute
let actualOutput = countEvenNumbers(input);

//Verify
let result = assertEquals(actualOutput, expectedOutput);
console.log(`Result: ${result}`);