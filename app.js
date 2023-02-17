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
        display.textContent = add(n1, n2);
        val1 = add(n1, n2);
    }
    if (operator === '-') {
        display.textContent = subtract(n1, n2);
        val1 = subtract(n1, n2);
    }
    if (operator === 'x') {
        display.textContent = multiply(n1, n2);
        val1 = multiply(n1, n2);
    }
    if (operator === '÷') {
        if (n2 === 0) {
            display.textContent = 'why are you trying to break my code';
        } else if (n2 !== 0) {
            display.textContent = divide(n1, n2);
            val1 = divide(n1, n2);
        }
        
    }
    
}


//get & display number vals


numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        if (val1 && !val2) {
            val2 += btn.textContent;
            display.textContent = val2;
            //console.log(`second: ${val2}`);
        } else {
            val1 += btn.textContent;
            display.textContent = val1;
            //console.log(`first: ${val1}`);
        }
    })
})


next.forEach(btn => {
    btn.addEventListener('click', () => {
        
        if (val1 && val2 && ops) {
            operate(Number(val1), Number(val2), ops); 
            val2 = '';
            console.log(`When btn was clicked just now: val1: ${val1}. Val2: ${val2}. ops: ${ops}`);
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
