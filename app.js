let displayValue = "";
let evalValue = "";

const display = document.getElementById("display");
function clearDisplay() {
  displayValue = "";
  evalValue = "";
  display.value = "";
}

function appendToDisplay(input, evalInput = null) {
  displayValue += input;
  evalValue += evalInput !== null ? evalInput : input;
  document.getElementById("display").value = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  evalValue = evalValue.slice(0, -1);
  display.value = displayValue;
}

function calculate() {
  try {
    let result = eval(evalValue);
    displayValue = result;
    evalValue = result;
    display.value = displayValue;
  } catch (error) {
    displayValue = "";
    evalValue = "";
    display.value = "Syntax Error";
  }
}
