let detailArr = [];
document.getElementById("send_me_code").addEventListener("click", detailsFun);

function detailsFun() {
  let name = document.getElementById("user_name").value;
  if (name.length == 0) {
    document.getElementById("name_alert").textContent = "";

    let icon = document.getElementById("name_alert");
    let spantag = document.createElement("span");
    spantag.textContent = "error";
    spantag.className = "material-symbols-outlined";
    let p = document.createElement("p");
    p.className = "p_tag";
    p.textContent = "Enter Your Name!";

    icon.append(spantag, p);

    // document.getElementById("name_alert").textContent = "Enter Your Name!";
  }
  let email = document.getElementById("user_email").value;
  if (email.length == 0) {
    document.getElementById("email_alert").textContent = "";

    let icon = document.getElementById("email_alert");
    let spantag = document.createElement("span");
    spantag.textContent = "error";
    spantag.className = "material-symbols-outlined";
    let p = document.createElement("p");
    p.className = "p_tag";
    p.textContent = "Enter Your Email !";

    icon.append(spantag, p);

    // document.getElementById("email_alert").textContent = "Enter Your Email!";
  }
  let City = document.getElementById("user_city").value;
  if (City.length == 0) {
    document.getElementById("city_alert").textContent = "";

    let icon = document.getElementById("city_alert");
    let spantag = document.createElement("span");
    spantag.textContent = "error";
    spantag.className = "material-symbols-outlined";
    let p = document.createElement("p");
    p.className = "p_tag";
    p.textContent = "Enter Your City !";

    icon.append(spantag, p);

    // document.getElementById("city_alert").textContent = "Enter Your City!";
  }
  console.log(name);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("address", address);
  if (email.length > 0 && name.length > 0 && City.length > 0) {
    window.location.href = "#"; // ./productpage.html
  }

}
