const display = document.querySelector("#lowerDisplay");
const upperDisplay = document.querySelector("#upperDisplay");
display.textContent = "";
upperDisplay.textContent = "";
let operator = "";
let first = "";
let second = "";


const buttons = (document.querySelectorAll(".button"));
    buttons.forEach(button => 
        button.addEventListener("click", updateDisplay));


function updateDisplay(e) {

    if(this.id === "clear") {
        clear();
    } else if (this.className === "button operator") {
        operatorClicked(this.id);
    } else if(this.id === "=") {
        equals();

    }else


    display.textContent = display.textContent += this.textContent;
}


function operatorClicked(id) {
    if(upperDisplay.textContent && display.textContent !=="") {
        first = upperDisplay.textContent;
        second = display.textContent;
        display.textContent = operate(operator, first, second);
    } else
    first = display.textContent;
    operator = id;
    upperDisplay.textContent = display.textContent;
    display.textContent ="";   
}

function clear() {
    display.textContent = "";
    upperDisplay.textContent = "";
    operator = "";
    first = "";
    second = "";
}

function equals() {
    if(upperDisplay.textContent === ""|| display.textContent ==="") {
        return;
    } else
    first = upperDisplay.textContent;
    second = display.textContent;
    upperDisplay.textContent = "";
    display.textContent = operate(operator, first, second);
}



function add(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(a && b === "0") {
        return "Nice try";
    }
    return a / b;
}


function operate(operator, a, b) {
console.log("operate has been called:" + a + operator + b);
    switch(operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return "Error"; 
    }
}