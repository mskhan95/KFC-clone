let value = localStorage.getItem("key");
let number = `Please enter the verification code we just sent to ${value}`;
console.log(number);
document.getElementById("span_tag_paragraph").textContent = number;
function codeFunction() {
  //   document.getElementById("span_tag_paragraph").innerHTML = "";
//   alert("im here");

  //   alert("done agian");
  window.location.href = "./index.html";
}
