function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = (weight / (height * height)) * 703;

    if (isNaN(bmi) || !height) {
        alert('Please enter valid weight and height values.');
        return;
    } else {
        document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(1)}`;
    };

    if (bmi < 18.5) {
        document.getElementById('category').innerText = 'You are in the Underweight range.';
    }
    else if (18.5 <= bmi && bmi < 24.9) {
        document.getElementById('category').innerText = 'You are in the Normal weight range.';
    }
    else if (25 <= bmi && bmi < 29.9) {
        document.getElementById('category').innerText = 'You are in the Overweight range.';
    }
    else {
        document.getElementById('category').innerText = 'You are in the Obesity range.';
    };
};