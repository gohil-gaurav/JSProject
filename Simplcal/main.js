function add() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = parseFloat(a) + parseFloat(b);
    document.getElementById("result").innerHTML = c;
}

function subtract() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = parseFloat(a) - parseFloat(b);
    document.getElementById("result").innerHTML = c;
}

function multiply() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = parseFloat(a) * parseFloat(b);
    document.getElementById("result").innerHTML = c;
}

function divide() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = parseFloat(a) / parseFloat(b);
    document.getElementById("result").innerHTML = c;
}

function squareRoot() {
    let a = document.getElementById("input1").value;
    let c = Math.sqrt(parseFloat(a));
    document.getElementById("result").innerHTML = c;
}

function double() {
    let a = document.getElementById("input1").value;
    let c = parseFloat(a) * 2;
    document.getElementById("result").innerHTML = c;
}

function exponent() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = Math.pow(parseFloat(a), parseFloat(b));
    document.getElementById("result").innerHTML = c;
}

function clear() {
    document.getElementById("result").innerHTML = " ";
}