var imgarr=[

    "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/7F8Xz1b5j2Ze9W3WNfIml1/0d5b5b4f4ea7b5bb703c50efd27df7e7/Chizza_Banner_1440x396.jpg?w=1366&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1366&fit=fill&fm=webp",
]
slideshow();
function slideshow(){
   var container=document.querySelector(".poster");
   var i=0;
   setInterval(function(){
     container.innerHTML=null;
     if(i==imgarr.length)
     {
       i=0;
     }
     var img=document.createElement("img");
     img.src=imgarr[i];
     container.append(img);
     i++
   },3000);
}





var dealarr=[
  {
    "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg",
    "title":"1 PC FREE CHICKEN ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS.",
    "content":"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.",
    "validitiy":"Valid to 31/12/30",

  },
  {
    "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg",
    "title":"1 PC FREE VEG ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS",
    "content":"1 Pc free Veg Zinger on a cart value of 499 or above on first order. Only for registered users",
    "validitiy":"Valid to 31/12/30",

  },
  {
    "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg",
    "title":"ADD 2 PC HOT N CRISPY CHICKEN @ JUST RS 99 ON MIN CART VALUE OF RS 499 OR MORE. APPLICABLE ON 2ND & 3RD ORDER FOR SIGNED IN USER.",
    "content":"Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.",
    "validitiy":"Valid to 01/01/30",

  },
  {
    "img":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg",
    "title":"UPTO RS 100 OFF ON MIN CART VALUE OF RS 599 OR MORE . APPLICABLE ON 4TH ORDER ONWARDS FOR SIGNED IN USER.",
    "content":"Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.",
    "validitiy":"Valid to 01/01/24",

  },
]

function dealAppend(){
  var i=0;
  dealarr.map(function(elem){
    if(i==3)
    {
      return;
    }
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
    a.href="./deals.html";
    var btn= document.createElement("button");
    btn.setAttribute("class","redeemButton");
    btn.innerHTML="Redeem";
    a.append(btn);
    cardButton.append(offerViewDetails,a);
    card.append(cardimg,ContentTitle,cardContent,cardButton);
    document.querySelector(".cardsContainer").append(card);
    i++;
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

