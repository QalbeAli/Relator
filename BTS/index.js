"use strict";
// Write a program that uses filter to remove all negative numbers from an array of numbers
let negativeNumbersArray = [1, 2, -3, 4, -5, 6, -7, 8, -9];
function removeNegativeNumbers(array) {
    return array.filter((item) => item >= 0);
}
console.log(removeNegativeNumbers(negativeNumbersArray));
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let arrayOfNumber = [1, 2, 3, 4, 5];
function multiplyWith2(array) {
    return array.map((item) => item * 2);
}
console.log(multiplyWith2(arrayOfNumber), "Multiply With 2");
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method
// to create a new array containing only the fruits with more than 5 characters.
let fruitsArray = ["apple", "banana", "cherry", "date", "grape"];
function fruitsWith5Charachters(array) {
    return array.filter((item) => item.length > 5);
}
console.log(fruitsWith5Charachters(fruitsArray), "Fruits Array is here");
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// use the map and filter methods together to create a new array containing the squares of even numbers.
let simpleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function useMapAndFilter(array) {
    return array
        .filter((item) => item % 2 === 0)
        .map((item) => {
        return Math.pow(item, 2);
    });
}
console.log(useMapAndFilter(simpleArray), "Here is the square array");
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a
// new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let celciusArray = [0, 10, 20, 30, 40];
function convertIntoCelcius(array) {
    return array.map((item) => (item * 9) / 5 + 32);
}
console.log(convertIntoCelcius(celciusArray), "Celcius Array Is Here");
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a
// new array containing the doubled values of odd numbers.
let oddArray = [3, 6, 9, 12, 15, 18];
function doubleTheOddNumber(array) {
    return array.filter((item) => (item % 2 !== 0)).map((item) => {
        return item * 2;
    });
}
console.log(doubleTheOddNumber(oddArray), "Odd array is here");
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach 
// method to log each name with an exclamation mark at the end, e.g., "Alice!".
let nameArray = ["Alice", "Bob", "Charlie", "David", "Emily"];
function forEachMethod(array) {
    //   return array.forEach ((item)=>{ console.log(`${item} Alice!`)})  
    return array.forEach((item) => {
        console.log(`${item} Alice!`);
    });
}
console.log(forEachMethod(nameArray));
