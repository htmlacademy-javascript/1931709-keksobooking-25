const generateRandomNumber = (min, max) => {
    let range = max - min;
    if (range > 0) {
        return Math.random() * (range + 1) + min;
    }

    return min >= 0 ? min : 0;

};

const getRandomInteger = (min, max) => Math.floor(generateRandomNumber(min, max));

const getRandomFloat = (min, max, fraction) => +generateRandomNumber(min, max).toFixed(fraction);

console.log(getRandomInteger(0, 10));
console.log(getRandomFloat(0, 10, 2));