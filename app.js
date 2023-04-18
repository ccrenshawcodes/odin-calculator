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
const calculator = (() => {
    const add = (a, b) => {
        return a + b;
    }
    const subtract = (a, b) => {
        return a - b;
    }

    const multiply = (a, b) => {
        return a * b;
    }

    const divide = (a, b) => {
        return a / b;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
})();


//'operate' function >>>
function operate(n1, n2, operator) {
    display.style.cssText = 'font-size: 50px;';
    if (operator === '+') {
        display.textContent = Math.round(calculator.add(n1, n2) * 100) / 100;
        val1 = calculator.add(n1, n2);
    }
    if (operator === '-') {
        display.textContent = Math.round(calculator.subtract(n1, n2) * 100) / 100;
        val1 = calculator.subtract(n1, n2);
    }
    if (operator === 'x') {
        display.textContent = Math.round(calculator.multiply(n1, n2) * 100) / 100;
        val1 = calculator.multiply(n1, n2);
    }

    if (operator === '÷') {
        if (n2 === 0) {
            display.textContent = 'why are you trying to break my code';
            display.style.cssText = 'font-size: small;';
            val1 = '';
            val2 = '';
            ops = '';
        } else if (n2 !== 0) {
            display.textContent = Math.round(calculator.divide(n1, n2) * 100) / 100;
            val1 = calculator.divide(n1, n2);
        }
        
    }
    
}


//get & display number vals
numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        display.style.cssText = 'font-size: 50px;';
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
    display.style.cssText = 'font-size: 50px;';
    val1 = '';
    val2 = '';
    ops = '';
    display.textContent = '0';
})
