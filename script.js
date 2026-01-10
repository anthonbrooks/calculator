// create variables for calculator buttons
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let negative = document.querySelector("#negative");
let percent = document.querySelector("#percent");
let equals = document.querySelector("#evaluate");
let decimal = document.querySelector("#decimal");

// add two numbers
const add = (x, y) => x + y;

// subtract two numbers
const subtract = (x, y) => x - y;

// multiply two numbers
const multiply = (x, y) => x * y;

// divide two numbers
function divide(x, y) {
    if (y === 0) {
        return 'ERROR';
    } else {
        return x / y;
    }
}