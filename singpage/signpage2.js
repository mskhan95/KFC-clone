let value = localStorage.getItem("key");
let number = `Please enter the verification code we just sent to ${value}`;
console.log(number);
let otpNumber;
document.getElementById("span_tag_paragraph").textContent = number;
function codeFunction() {
  let a = document.getElementById("Ist").value;
  let b = document.getElementById("Sec").value;
  let c = document.getElementById("Third").value;
  let d = document.getElementById("Fourth").value;
  otpNumber = a * 100 + b * 10 + c * 1 + d;
  console.log(otpNumber);
  console.log(x);
  if (x == otpNumber) {
    alert("Login Successfully.");
    window.location.href = "./signpage1.html";
  } else {
    alert("Invalid Otp!");
  }
}

// timmer

function timer() {
  var sec = 30;
  var timer = setInterval(function () {
    document.getElementById("safeTimerDisplay").innerHTML =
      `Your code will expire in 00: ` + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}
timer();

// otp section

let x = otpNum(1000, 10000);
var i = 1;
function addinterval() {
  var id = setInterval(() => {
    if (i >= 1) {
      clearInterval(id);
    }
    alert(x);
    i++;
  }, 2000);
}
addinterval();

function otpNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(x);
