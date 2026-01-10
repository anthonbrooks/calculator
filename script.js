// create variables for calculator buttons
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('#clear');
let negative = document.querySelector('#negative');
let percent = document.querySelector('#percent');
let equals = document.querySelector('#evaluate');
let decimal = document.querySelector('#decimal');

// variable for all buttons
let buttons = document.querySelectorAll('button');

// create variables for display
let display = document.querySelector('#display');

// variables for the buttons clicked
let currentValue = '';
let num1 = '';
let num2 = '';
let operator = null;

// update display
function appendDisplay(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentValue = '';
        } else if (value === '+/-') {
            -currentValue;
        } else {
            currentValue += value;
        }

        display.value = currentValue;
    });
});

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
    x = +x;
    y = +y;

    switch (operator) {
        case '+': return add(x, y);
        case '-': return subtract(x, y);
        case '*': return multiply(x, y);
        case '/': return divide(x, y);
    }
}

// handle button clicks
// button.addEventListener('click', function() {
//     appendDisplay(button);
// });