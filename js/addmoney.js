document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const addMoney = getInputfieldValue("add-money-input");
    const pinNumber = getInputfieldValue("pin-input");
    if (pinNumber != 1234) {
      alert("wrong input! Please try again");
      return;
    }
    const balance = getInputTextValue("available-balance");
    const updateBalance = balance + addMoney;
    document.getElementById("available-balance").innerText = updateBalance;
  });
