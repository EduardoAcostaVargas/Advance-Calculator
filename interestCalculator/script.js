const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const termInput = document.getElementById('term');
const resultDisplay = document.getElementById('result');

function calculateInterest() {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const term = parseFloat(termInput.value);

    if(isNaN(principal) || isNaN(rate) || isNaN(term) || principal <= 0 || rate <= 0 || term <= 0) {

        resultDisplay.textContent = 'Please enter valid positive numbers for all fields.';
        resultDisplay.classList.add('show');
        return;
    }
    const interest = (principal * rate * term) / 100;
    resultDisplay.innerHTML = `<h3>The interest is: $${interest.toFixed(2)}</h3>`;
    resultDisplay.classList.add('show');
}