const display = document.querySelector("#lowerDisplay");
const upperDisplay = document.querySelector("#upperDisplay");
display.textContent = "";
let operator = "";
let first = "";
let second = "";


const buttons = (document.querySelectorAll(".button"));
    buttons.forEach(button => 
        button.addEventListener("click", updateDisplay));


function updateDisplay(e) {
    console.log(this.className);

    if(this.id === "clear") {
        display.textContent = "";
        upperDisplay.textContent = "";
    } else if (this.className === "button operator") {
        first = display.textContent;
        operator = this.id;
        upperDisplay.textContent = display.textContent;
        display.textContent ="";     
    } else if(this.id === "=") {
        second = display.textContent;
        upperDisplay.textContent = "";
        display.textContent = operate(operator, first, second);

    }else


    display.textContent = display.textContent += this.textContent;
}


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


function operate(operator, a, b) {
    
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