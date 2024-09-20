function getInputfieldValue(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

// text input area

function getInputTextValue(id) {
  const tetxInput = document.getElementById(id).innerText;
  const textNumber = parseFloat(tetxInput);
  return textNumber;
}
