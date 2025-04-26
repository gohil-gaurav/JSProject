function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    document.getElementById("display").value += operator;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function calculateSquareRoot() {
    document.getElementById("display").value = Math.sqrt(eval(document.getElementById("display").value));
}

function calculatePower() {
    let value = eval(document.getElementById("display").value);
    document.getElementById("display").value = Math.pow(value, 2);
}

function calculateLog() {
    document.getElementById("display").value = Math.log(eval(document.getElementById("display").value));
}

function calculateSin() {
    document.getElementById("display").value = Math.sin(eval(document.getElementById("display").value));
}

function calculateCos() {
    document.getElementById("display").value = Math.cos(eval(document.getElementById("display").value));
}

function calculateTan() {
    document.getElementById("display").value = Math.tan(eval(document.getElementById("display").value));
}
