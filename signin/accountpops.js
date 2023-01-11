document.getElementById("signout").addEventListener("click",()=>{
window.localStorage.clear();
window.location.href="index.html";
});

var totalpro = parseInt(localStorage.getItem("count")) || 0;
var arrlength = document.getElementById("array_length")
arrlength.textContent = totalpro;

function navcheck(){
    let name = localStorage.getItem("name");
    let City = localStorage.getItem("City");
    if( name!=null && City!=null ){
        
document.getElementById("uesr_name").textContent = "";
document.getElementById("uesr_name").append(name);


document.getElementById("btnbtn").innerHTML = null;
document.getElementById("cityname").textContent = "";
document.getElementById("cityname").append(City);
var anchor=document.getElementById("signout_signin");
anchor.href="accountpops.html";
    }
}
navcheck();

$(function(){
    $("#foot").load("./footer.html"); 
});
