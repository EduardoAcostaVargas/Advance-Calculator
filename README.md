# Advance-Calculator

A collection of web-based calculators built with HTML, CSS, and JavaScript. This project includes multiple specialized calculators for different calculation needs.

## Project Overview

Advance-Calculator is a multi-tool calculator application featuring four different calculator types, each designed for specific mathematical operations. The application provides a clean, user-friendly interface for performing various calculations.

## Features

### 1. **Basic Calculator**
- Perform standard arithmetic operations
- Support for addition, subtraction, multiplication, and division
- Percentage calculation
- Clear display and delete last character functionalities
- Real-time calculation display

**Location:** `basicCalculator/basic_calc.html`

### 2. **Interest Calculator**
- Calculate simple interest on principal amounts
- Input fields for principal amount, interest rate, and time period
- Formula: Interest = (Principal × Rate × Time) / 100
- Displays calculated interest with proper validation
- Input validation for positive numbers

**Location:** `interestCalculator/interest_calc.html`

### 3. **Binary Converter**
- Convert decimal numbers to binary
- Simple one-click conversion
- Error handling for invalid inputs
- Display results instantly

**Location:** `binaryConverter/binary_conv.html`

### 4. **BMI Calculator**
- Calculate Body Mass Index based on weight and height
- Automatic BMI category classification:
  - Underweight (BMI < 18.5)
  - Normal weight (BMI 18.5 - 24.9)
  - Overweight (BMI 25.0 - 29.9)
  - Obesity (BMI ≥ 30)
- Input validation for accurate calculations

**Location:** `bmi-calculator/bmi.html`

## Project Structure

```
Advance-Calculator/
├── index.html              # Main landing page with calculator links
├── style.css              # Main stylesheet
├── README.md              # Project documentation
├── basicCalculator/
│   ├── basic_calc.html    # Basic calculator interface
│   ├── script.js          # Calculator logic
│   └── styles.css         # Calculator-specific styles
├── interestCalculator/
│   ├── interest_calc.html # Interest calculator interface
│   ├── script.js          # Interest calculation logic
│   └── style.css          # Interest calculator styles
├── binaryConverter/
│   ├── binary_conv.html   # Binary converter interface
│   ├── script.js          # Conversion logic
│   └── style.css          # Converter styles
├── bmi-calculator/
│   ├── bmi.html           # BMI calculator interface
│   ├── script.js          # BMI calculation logic
│   └── styles.css         # BMI calculator styles
└── svgs/                  # SVG assets directory
```

## How to Use

1. **Open the application:** Open `index.html` in a web browser
2. **Select a calculator:** Click on the desired calculator type from the main menu
3. **Enter your data:** Input the required values
4. **Get results:** The calculator will display the results based on your inputs

## Technologies Used

- **HTML5:** Structure and markup
- **CSS3:** Styling and layout
- **JavaScript (Vanilla):** All calculation logic and interactivity
- **Fonts:** Google Fonts (Poppins)

## Browser Compatibility

This application works on all modern browsers that support:
- HTML5
- CSS3
- ES6 JavaScript

## Installation

Simply clone or download this repository and open `index.html` in your web browser. No server or installation required.

## Features & Functionality

### Input Validation
- All calculators include input validation
- Error messages for invalid inputs
- Prevents incorrect calculations

### User Interface
- Responsive design
- Clean and intuitive interface
- Professional styling with Poppins font
- Easy navigation between calculators

### Calculation Methods

**Basic Calculator:** Uses JavaScript `eval()` for mathematical expression evaluation

**Interest Calculator:** Implements simple interest formula: I = (P × R × T) / 100

**Binary Converter:** Converts decimal to binary using `toString(2)` method

**BMI Calculator:** Calculates BMI using formula: BMI = (weight / height²) × 703

## Future Enhancements

- Add more calculator types (mortgage, loan, currency converter, etc.)
- Implement calculation history feature
- Add dark mode theme
- Mobile app version
- Advanced scientific calculator functions

## Author

Created as an educational project to demonstrate web development skills.

## License

This project is open source and available for personal and educational use.
