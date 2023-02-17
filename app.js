//buttons
const clear = document.querySelector('#clear');
const equ = document.querySelector('#equals');

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const div = document.querySelector('#div');

const numbers = document.querySelectorAll('.numbers > .num');

let display = document.querySelector('.display');


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
    if (operator === 'plus') {
        add(n1, n2);
    }
    if (operator === 'minus') {
        subtract(n1, n2);
    }
    if (operator === 'times') {
        multiply(n1, n2);
    }
    if (operator === 'div') {
        divide(n1, n2);
    }
}

//display the value of a number button when it's clicked
numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        display.textContent = btn.textContent;
    })
})
