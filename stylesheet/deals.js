var dealarr=[
    {
      "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg",
      "title":"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.",
      "content":"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.",
      "validitiy":"Valid to 31/12/30",
  
    },
    {
      "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg",
      "title":"1 Pc free Veg Zinger on a cart value of 499 or above on first order. Only for registered users",
      "content":"1 Pc free Veg Zinger on a cart value of 499 or above on first order. Only for registered users",
      "validitiy":"Valid to 31/12/30",
  
    },
    {
      "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg",
      "title":"Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.",
      "content":"Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.",
      "validitiy":"Valid to 01/01/30",
  
    },
    {
      "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg",
      "title":"Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.",
      "content":"Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.",
      "validitiy":"Valid to 01/01/24",
  
    },
  ]
  
  function dealAppend(){
    
    dealarr.map(function(elem){
      
      var card=document.createElement("div");
      card.setAttribute("class","card");
      var cardimg=document.createElement("div");
      cardimg.setAttribute("class","cardImg");
      var img=document.createElement("img");
      img.src=elem.img;
      cardimg.append(img);
      var ContentTitle=document.createElement("div");
      ContentTitle.setAttribute("class","cardContentTitle");
      ContentTitle.innerHTML=elem.title;
      var cardContent=document.createElement("div");
      cardContent.setAttribute("class","cardContent");
      cardContent.innerHTML=elem.content;
      var cardButton=document.createElement("div");
      cardButton.setAttribute("class","cardButton");
      var offerViewDetails=document.createElement("div");
      offerViewDetails.setAttribute("class","offerViewDetails");
      offerViewDetails.innerHTML="View Details";
      offerViewDetails.addEventListener("click",()=>{
        modalappend(elem);
      })
      var a=document.createElement("a");
      a.href="./product.html";
      var btn= document.createElement("button");
      btn.setAttribute("class","redeemButton");
      btn.innerHTML="Redeem";
      a.append(btn);
      cardButton.append(offerViewDetails,a);
      card.append(cardimg,ContentTitle,cardContent,cardButton);
      document.querySelector(".cardsContainer").append(card);
     
    })
  }
  
  dealAppend();



  var modal = document.getElementById("myModal");




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function modalappend(elem) {
  modal.style.display = "block";
  document.getElementById("popuptitle").textContent=elem.title;
  document.getElementById("validity").textContent=elem.validitiy;
  document.getElementById("popupcontent").textContent=elem.content;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}