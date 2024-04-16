document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".buttons button");
    let currentInput = '';
    buttons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonValue = this.dataset.value;
        if (buttonValue === "AC") {
            clearDisplay();
        } else if (buttonValue === "DEL") {
            deleteLastChar();
        } else if (buttonValue === "=") {
            calculate();
        } else {
            currentInput += buttonValue;
            updateDisplay();
        }
    });
    });
    function updateDisplay() {
    display.value = currentInput;
    }
    function clearDisplay() {
    currentInput = '';
    updateDisplay();
    }
    function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
    }
    function calculate() {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
    }
    });