const assertEquals = require('../test-framework');
const countOddNumbers = require('../src/countOddNumbers');

const testName = 'Test: Number of odd numbers within an array.';
console.log(testName + '\n');

//Set up
const testArray = [1, 4, 6, 7, 2, 7, 8, 4, 2, 5];
const expectedResult = 4;

//Execute
const actualResult = countOddNumbers(testArray);

//Verify
let result = assertEquals(actualResult, expectedResult);
console.log(`Result: ${result}`);