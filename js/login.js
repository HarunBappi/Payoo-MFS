document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number");
    if (mobileNumber.value.length > 11 || mobileNumber.value.length < 11) {
      alert('"Wrong input.. Please try again..."');
      return;
    }
    const pinNumber = document.getElementById("pin-number").value;
    if (pinNumber == 1234) {
      window.location.href = "home.html";
    } else {
      alert("Wrong input.. Please try again...");
    }
  });
