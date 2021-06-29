countOddNumbers = (numArray) => {
    let numOfOddNumbers = 0;

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 !== 0) {
            numOfOddNumbers++;
        }
    }

    return numOfOddNumbers;
}

module.exports = countOddNumbers;