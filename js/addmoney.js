document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const addMoney = getInputfieldValue("add-money-input");
    if (isNaN(addMoney)) {
      alert("wrong input! Please try again");
      return;
    }
    const pinNumber = getInputfieldValue("pin-input");
    if (pinNumber != 1234) {
      alert("wrong input! Please try again");
      return;
    }
    const balance = getInputTextValue("available-balance");
    const updateBalance = balance + addMoney;
    document.getElementById("available-balance").innerText = updateBalance;
    // Transaction history by Create Element
    const p = document.createElement("p");
    p.innerText = `
   added: ${addMoney} tk. New Balance: ${updateBalance}`;
    document.getElementById("transaction-container").appendChild(p);
  });
