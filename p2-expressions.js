/*
    CIT 281 Project 2
    Name: Caralee Chenoweth
*/
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Returns a single random letter
const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let letter = alphabet[getRandomInteger(0,27)];
    return letter;
};



let result = "";

// Returns a random length string
const getRandomString = function(minLength, maxLength) {
    let string_length = getRandomInteger(minLength,maxLength);
    for (let i = 0; i < string_length; i++) {
        result += getRandomLetter();
    }
    return result;
}
console.log(getRandomString(10,20));

// Sorts the string alphabetically
const getSortedString = function(string = result) { let array = string.split(""); let sorted = array.sort(); return sorted.join("");}
console.log(getSortedString());
