
const display = document.getElementById('result');

function appendToDisplay(input){
    display.value += input;
};
function clearDisplay(){
    display.value = '';
};
function deleteLast(){
    display.value = display.value.slice(0,-1);
};


function appendOperator(operator) {
    display.value += operator;
}

function percentage() {
    return display.value = display.value / 100;
};

function calculateResult(){
   if(display.value === ''){
    display.value = '0';
   }else{
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
   };
};