// add Money button
document
  .getElementById("select-add-money")
  .addEventListener("click", function () {
    showSectionById("add-money-field");
  });

// Cash Out Button

document
  .getElementById("select-cash-out")
  .addEventListener("click", function () {
    showSectionById("cash-out-field");
  });

// Transaction Button
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    showSectionById("transaction-history");
  });
