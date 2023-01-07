let a = "nehal";
console.log(a);

let numberStore;
function codeFunction() {
  numberStore = document.getElementById("input_numstore").value;
  if (numberStore.length == 0 || numberStore.length < 10) {
    document.getElementById("pop_message").textContent = "";

    let icon = document.getElementById("pop_message");
    let spantag = document.createElement("span");
    spantag.textContent = "error";
    spantag.className = "material-symbols-outlined";
    let p = document.createElement("p");
    p.id = "p_tag";
    p.textContent = "Please enter a valid 10-digit mobile number !";

    icon.append(spantag, p);
  } else {
    document.getElementById("pop_message").textContent = "";

    localStorage.setItem("key", numberStore);

    window.location.href = "./signpage2.html";
  }
}

function checkNumber() {
  let numcollect = document.getElementById("input_numstore").value;

  // if (
  //   (numcollect.length < 10 && numcollect.length > 0) ||
  //   numcollect.length != ""
  // ) {
  //   document.getElementById("pop_message").textContent =
  //     "Please enter a valid 10-digit mobile number";
  //   document.getElementById("show_phoneNumber").textContent = "Phone Number";
  // } else
  if (numcollect.length == 10) {
    document.getElementById("pop_message").textContent = "";
    document.getElementById("show_phoneNumber").textContent = "";
  }
}

function asGuestFuntion() {
  window.location.href = "./signpage2.html";
}
