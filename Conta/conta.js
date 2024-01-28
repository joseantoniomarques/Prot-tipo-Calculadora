 function multipliqueDoisNumeros() {
    var inputNumber = document.getElementById('inputNumber').value;
    var inputNumber2 = document.getElementById('inputNumber2').value;
    var outputNumber = inputNumber * inputNumber2;
    document.getElementById('outputNumber').innerHTML = outputNumber;
}

function subtraiaDoisNumeros() {
    var inputNumber = document.getElementById('inputNumber').value;
    var inputNumber2 = document.getElementById('inputNumber2').value;
    var outputNumber = inputNumber - inputNumber2;
    document.getElementById('outputNumber').innerHTML = outputNumber;
}

function someDoisNumerosJuntos() {
    var inputNumber = document.getElementById('inputNumber').value;
    var inputNumber2 = document.getElementById('inputNumber2').value;
    outputNumber = inputNumber - -  inputNumber2;
    document.getElementById('outputNumber').innerHTML = outputNumber;
}

function dividaDoisNumeros() {
    var inputNumber = document.getElementById('inputNumber').value;
    var inputNumber2 = document.getElementById('inputNumber2').value;
    var outputNumber = inputNumber / inputNumber2;
    document.getElementById('outputNumber').innerHTML = outputNumber;
}