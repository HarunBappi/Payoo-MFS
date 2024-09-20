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

// toggle Feature

function showSectionById(id) {
  document.getElementById("add-money-field").classList.add("hidden");
  document.getElementById("cash-out-field").classList.add("hidden");
  document.getElementById("transaction-history").classList.add("hidden");
  // Show the ID click by section
  document.getElementById(id).classList.remove("hidden");
}
