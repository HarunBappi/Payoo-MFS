document.getElementById("btn-cash-out").addEventListener("click", function (e) {
  e.preventDefault();
  const cashOut = getInputfieldValue("cash-out-input");
  const pinNumber = getInputfieldValue("cash-out-pin");
  if (pinNumber != 1234) {
    alert("wWrong input! Please try again.");
    return;
  }
  const balance = getInputTextValue("available-balance");
  const availableBalance = balance - cashOut;
  if (cashOut > balance || cashOut < 0) {
    alert("Wrong input! Please try again.");
    return;
  }
  document.getElementById("available-balance").innerText = availableBalance;
});
