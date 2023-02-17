//buttons
const clear = document.querySelector('#clear');
const next = document.querySelectorAll('#next');

const numbers = document.querySelectorAll('.numbers > .num');
const operators = document.querySelectorAll('.operators > .ops');

let display = document.querySelector('.display');

const calcValues = {
    val1: '',
    val2: '',
    ops: '',
}

let val1 = calcValues.val1;
let val2 = calcValues.val2;
let ops = calcValues.ops;

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
    return a / b;
}


//'operate' function >>>
function operate(n1, n2, operator) {
    if (operator === '+') {
        display.textContent = Math.round(add(n1, n2) * 100) / 100;
        val1 = add(n1, n2);
    }
    if (operator === '-') {
        display.textContent = Math.round(subtract(n1, n2) * 100) / 100;
        val1 = subtract(n1, n2);
    }
    if (operator === 'x') {
        display.textContent = Math.round(multiply(n1, n2) * 100) / 100;
        val1 = multiply(n1, n2);
    }

    if (operator === '÷') {
        if (n2 === 0) {
            display.textContent = 'why are you trying to break my code';
        } else if (n2 !== 0) {
            display.textContent = Math.round(divide(n1, n2) * 100) / 100;
            val1 = divide(n1, n2);
        }
        
    }
    
}


//get & display number vals
numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        if (ops) {
            if (val1) {
                val2 += btn.textContent;
                display.textContent = val2;
            } else if (!val1) {
                val1 += btn.textContent;
                display.textContent = val1;
                ops = '';
            }
        } else if (!ops) {
            val1 += btn.textContent;
            display.textContent = val1;
        }
    })
})

//operate OR update 'ops' when an operator button is clicked
next.forEach(btn => {
    btn.addEventListener('click', () => {
        
        if (val1 && val2 && ops) {
            operate(Number(val1), Number(val2), ops); 
            val2 = '';
        }
        ops = btn.textContent;
    })
})

//clear all
clear.addEventListener('click', () => {
    val1 = '';
    val2 = '';
    ops = '';
    display.textContent = '';
})
