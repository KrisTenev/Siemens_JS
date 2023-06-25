//const number1Button        = document.getElementById("number-1");
const numberButtonCollection = document.getElementsByClassName("number");

const operationAdd           = document.getElementById("operation-add");
const operationSub           = document.getElementById("operation-sub");
const operationMultiply      = document.getElementById("operation-multiply");
const operationDevide        = document.getElementById("operation-devide");

const operationClearAll      = document.getElementById("operation-clear-all");

const operationCalculation   = document.getElementById("operation-calculaton");
const display                = document.getElementById("display");

let calculatorSum       = null;
let operand             = 0;
let currentOperation    = null;

for (let i = 0; i < numberButtonCollection.length; i++) {

    const element   = numberButtonCollection[i];
    const text      = +element.getAttribute('data-number');

    element.addEventListener('click', () => {
        operand             = text;
        display.innerHTML   = text;
    });
}

operationAdd.addEventListener('click', () => {
    currentOperation    = 'add';
    calculatorSum       = calculatorSum + operand;
    display.innerHTML   = calculatorSum;
});

operationSub.addEventListener('click', () => {
    currentOperation    = 'sub';

    if(calculatorSum == null) {
        calculatorSum   = operand;
    }
    else {
        calculatorSum   = calculatorSum - operand;
    }                          

    display.innerHTML = calculatorSum;
});

operationMultiply.addEventListener('click', () => {
    currentOperation = 'mul';

    if(calculatorSum == null) {
        calculatorSum = operand;
    }
    else { 
        calculatorSum = calculatorSum * operand;
    }
    
    display.innerHTML = calculatorSum;
});

operationDevide.addEventListener('click', () => {
    currentOperation = 'dev';

    if(calculatorSum == null) calculatorSum = operand;
    else calculatorSum  = calculatorSum / operand;
    
    display.innerHTML = calculatorSum;
});

operationCalculation.addEventListener('click', () => {
    if(currentOperation == 'add')
    {
        calculatorSum = calculatorSum + operand;
    }

    if(currentOperation == 'sub')
    {
        calculatorSum = calculatorSum - operand;
    }

    if(currentOperation == 'mul')
    {
        calculatorSum = calculatorSum * operand;
    }

    if(currentOperation == 'dev')
    {
        calculatorSum = calculatorSum / operand;
    }

    display.innerHTML = calculatorSum;
});

operationClearAll.addEventListener('click', () => {
    currentOperation    = 'clear-all';
    calculatorSum       = null;
    display.innerHTML   = calculatorSum;
});
