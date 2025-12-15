const decimalInput = document.getElementById('decimal-input');
const convertButton = document.getElementById('convert-button');
const resultDisplay = document.getElementById('display-result');

function decimalToBinary(){
    const decimalNumber = parseInt(decimalInput.value);
    if (isNaN(decimalNumber)) {
        resultDisplay.textContent = "Please enter a valid number.";
        return;
    }
    return resultDisplay.textContent = decimalNumber.toString(2);
};