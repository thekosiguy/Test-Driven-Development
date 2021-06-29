function countEvenNumbers(numArray) {
    let numOfEvenNumbers = 0;

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            numOfEvenNumbers++;
        }
    }

    return numOfEvenNumbers;
}

module.exports = countEvenNumbers;