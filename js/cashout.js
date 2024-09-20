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
  // Transaction history by Create Element
  const div = document.createElement("div");
  div.classList.add("bg-yellow-500");
  div.innerHTML = `
   <p>Cash Out ${cashOut} tk. New Balance: ${availableBalance}</p>
  `;
  document.getElementById("transaction-container").appendChild(div);
});
