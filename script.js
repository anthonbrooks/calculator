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