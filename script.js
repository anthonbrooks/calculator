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

        if (button.id === 'clear') {
            currentValue = '';
            num1 = '';
            num2 = '';
            operator = null;
        } else if (value === '+/-') {
            // -(+currentValue);
        } else if (button.classList.contains('operator')) {
            num1 = currentValue;
            operator = button.textContent;
            currentValue = '';
        } else if (button.id === 'evaluate') {
            num2 = currentValue;
            operate(operator, num1, num2);
            operator = null;
        } else {
            currentValue += button.textContent;
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