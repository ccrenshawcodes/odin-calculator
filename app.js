//buttons
const clear = document.querySelector('#clear');
const equ = document.querySelector('#equals');

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const div = document.querySelector('#div');

const numbers = document.querySelectorAll('.numbers > .num');
const operators = document.querySelectorAll('.operators > .ops');

const allBtns = document.querySelectorAll('.btns');

let display = document.querySelector('.display');

const calcValues = {
    val1: '',
    val2: '',
    ops: '',
}


//basic maths>>>
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'why are you trying to break my code? it wont work';
    }
}

//'operate' function >>>
function operate(n1, n2, operator) {
    if (operator === '+') {
        display.textContent = add(n1, n2);
    }
    if (operator === '-') {
        display.textContent = subtract(n1, n2);
    }
    if (operator === 'x') {
        display.textContent = multiply(n1, n2);
    }
    if (operator === '÷') {
        display.textContent = divide(n1, n2);
    }
}


//get & display number vals
numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!calcValues.ops) {
            calcValues.val1 += btn.textContent;
            display.textContent = calcValues.val1;
        } else if (calcValues.val1 && calcValues.ops) {
            calcValues.val2 += btn.textContent;
            display.textContent = calcValues.val2;
        }
    })
})

//get operator
operators.forEach(btn => {
    btn.addEventListener('click', () => {
        calcValues.ops = btn.textContent;
    })
})

//perform operate with the correct vals
equ.addEventListener('click', () => {
    operate(Number(calcValues.val1), Number(calcValues.val2), calcValues.ops);
})

//clear all
clear.addEventListener('click', () => {
    calcValues.val1 = '';
    calcValues.val2 = '';
    calcValues.ops = '';
    display.textContent = '';
})
