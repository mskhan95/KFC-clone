// ------- Payment Options -----------
var modal = document.getElementById("myModal");
var btn = document.getElementById("payOptBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
// x - Btn
span.onclick = function() {
    modal.style.display = "none";
}
// close --> outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var subPay = document.getElementById("subPay");
subPay.onclick = function() {
    modal.style.display = "none";
}

// Right Div Price Details

var subt = localStorage.getItem("subtotal");
document.querySelector(".chargeclass1").innerHTML= subt;

var qty = localStorage.getItem("Quantity");
document.getElementById("totalquant").innerHTML= qty;

var totQ = localStorage.getItem("finalprice");
document.querySelector(".chargeclass2").innerHTML= totQ;

function checkoutConfirmation(){
    var address=document.getElementById("address").value;
    var pincode=document.getElementById("pincode").value;
    if(address=="" || pincode==""){
        alert("Enter the Complete Adresss and Pincode to Proceed");
    }
    else if(paymethod!="pay"){
        alert("Select the Payment Method to Proceed");
    }
    else{
        window.location.href="./success.html";
    }
}
var paymethod="";
document.getElementById("subPay").addEventListener("click",displayRadioValue);
function displayRadioValue() {
    paymethod="pay";
    console.log(paymethod);
}

function navcheck(){
    let name = localStorage.getItem("name");
    
    if( name!=null ){
    
document.getElementById("AccountName").textContent =name;

    }
}
navcheck();

