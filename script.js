// create variables for calculator buttons
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('#clear');
let negative = document.querySelector('#negative');
let percent = document.querySelector('#percent');
let equals = document.querySelector('#evaluate');
let decimal = document.querySelector('#decimal');

// variable for all buttons
let button = document.querySelectorAll('button');

// create variables for display
let display = document.querySelector('#display');

// update display
function appendDisplay(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

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

function operate(operator, x, y) {

}

// handle button clicks
// button.addEventListener('click', function() {
//     appendDisplay(button);
// });