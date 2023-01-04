let a = "nehal";
console.log(a);

// document.getElementById("pop_message").textContent = "";
// document.getElementById("show_phoneNumber").textContent = "";

let numberStore;
function codeFunction() {
  numberStore = document.getElementById("input_numstore").value;
  localStorage.setItem("key", numberStore);

  window.location.href = "./index2.html";
}

function checkNumber() {
  let numcollect = document.getElementById("input_numstore").value;

  if (numcollect.length < 10 && numcollect.length > 0) {
    document.getElementById("pop_message").textContent = "logo" + "Please enter a valid 10-digit mobile number";
    document.getElementById("show_phoneNumber").textContent = "Phone Number";
  } else {
    document.getElementById("pop_message").textContent = "";
    document.getElementById("show_phoneNumber").textContent = "";
  }
}

function asGuestFuntion() {
  window.location.href = "./index2.html";
}
