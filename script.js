// create variables for calculator buttons
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let negative = document.querySelector("#negative");
let percent = document.querySelector("#percent");
let equals = document.querySelector("#evaluate");
let decimal = document.querySelector("#decimal");

// variable for all buttons
let buttons = document.querySelectorAll("button");

// create variables for display
let display = document.querySelector("#display");

// variables for the buttons clicked
let currentValue = "";
let num1 = "";
let num2 = "";
let operator = null;

const state = {
  displayValue: "0",
  firstValue: null,
  operator: null,
  waitingForSecondValue: false,
};

function updateDisplay() {
  if (state.operator && state.waitingForSecondValue) {
    display.value = `${state.displayValue}${state.operator}`;
  } else if (state.operator) {
    display.value = `${state.firstValue}${state.operator}${state.displayValue}`;
  } else {
    display.value = state.displayValue;
  }
}

function inputNumber(num) {
  if (state.waitingForSecondValue) {
    state.displayValue = num;
    state.waitingForSecondValue = false;
  } else {
    state.displayValue =
      state.displayValue === "0" ? num : state.displayValue + num;
  }
}

function inputDecimal() {
  if (state.waitingForSecondValue) {
    state.displayValue = "0.";
    state.waitingForSecondValue = false;
    return;
  }

  if (!state.displayValue.includes(".")) {
    state.displayValue += ".";
  }
}

function handleOperator(nextOperator) {
  const inputValue = parseFloat(state.displayValue);

  if (state.operator && state.waitingForSecondValue) {
    state.operator = nextOperator;
    return;
  }

  if (state.firstValue === null) {
    state.firstValue = inputValue;
  } else if (state.operator) {
    const result = operate(state.operator, state.firstValue, inputValue);

    state.displayValue = String(result);
    state.firstValue = result;
  }

  state.waitingForSecondValue = true;
  state.operator = nextOperator;
}

function deleteLast() {
  if (state.displayValue.length > 1) {
    state.displayValue = state.displayValue.slice(0, -1);
  } else {
    state.displayValue = "0";
  }
}

function resetCalculator() {
  state.displayValue = "0";
  state.firstValue = null;
  state.operator = null;
  state.waitingForSecondValue = false;
}

function handleEquals() {
  const inputValue = parseFloat(state.displayValue);

  if (state.operator === null || state.waitingForSecondValue) return;

  const result = operate(state.operator, state.firstValue, inputValue);

  state.displayValue = String(result);
  state.firstValue = null;
  state.operator = null;
  state.waitingForSecondValue = false;
}

function handleNegative() {
  if (state.displayValue > 0) {
    state.displayValue = -state.displayValue;
  } else {
    state.displayValue = -state.displayValue;
  }
}

function handlePercent() {
  state.displayValue = state.displayValue / 100;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("numbers")) {
      inputNumber(value);
    }

    if (button.id === "clear") {
      if (clear.textContent === "clear") {
        resetCalculator();
      } else {
        deleteLast();
      }
    }

    if (button.id === "negative") {
      handleNegative();
    }

    if (button.id === "percent") {
      handlePercent();
    }

    if (button.classList.contains("operator")) {
      handleOperator(value);
    }

    if (button.id === "decimal") {
      inputDecimal();
    }

    if (button.id === "evaluate") {
      handleEquals();
    }

    updateDisplay();
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
    return "ERROR";
  } else {
    return x / y;
  }
}

function operate(operator, x, y) {
  x = +x;
  y = +y;

  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "x":
      return multiply(x, y);
    case "/":
      return divide(x, y);
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (display.value.length > 0) {
      clear.textContent = "del";
    } else {
      clear.textContent = "AC";
    }
  });
});
