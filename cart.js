var dataofaddedcart = JSON.parse(localStorage.getItem("productdetail")) || [];

// if(localStorage.getItem == []){
//     window.location.href = "./emptycart.html"
// }else{
//     window.location.href = "./democart.html"
// }



window.addEventListener("load", function(){
    displayData(dataofaddedcart);
    console.log("check")
});


var totally_total =  0;  
var n = 37;         
var quantity = 0;

function displayData(dataofaddedcart){

    var sub = document.querySelector("#subtotal");
    var whole_total  = document.getElementById("Ordertotal");

    dataofaddedcart.map(function (elem, index){
        quantity++;
    

        var cartdivs = document.createElement("div"); 
        cartdivs.classList.add("cart_divs");    

        var imgdiv = document.createElement("div");
        var image = document.createElement("img");
        image.style.height = "150px";
        image.style.width = "150px";

       
        image.setAttribute("src", elem.image);
 
        image.setAttribute("alt", elem.name);
 
        image.classList.add("imgcls");
        imgdiv.append(image);
        
        var desdiv = document.createElement("div");
        var desname = document.createElement("p");
        desname.textContent = elem.name;
        desname.classList.add("p_cls");
        desdiv.append(desname);        

        var decramtdiv = document.createElement("div");
        var damt = document.createElement("button");
        damt.textContent = "-";

        damt.addEventListener("click", function(){
            decrease_qty(qty, elem.price, total, sub, whole_total,  elem, index);
            // console.log(qty, elem.price, t);
        });

        damt.classList.add("dec_cls");
        decramtdiv.append(damt);

        var qtydiv = document.createElement("div");
        var qty = document.createElement("p");
        qty.textContent = Number(1);                      
        qty.classList.add("q_cls");
        qtydiv.append(qty);

        var incramtdiv = document.createElement("div");
        var iamt = document.createElement("button");
        iamt.textContent = "+";
        
        iamt.addEventListener("click", function(){
            increase_qty(qty, elem.price, total, sub, whole_total, elem, index);
        });

        iamt.classList.add("inc_cls");
        incramtdiv.append(iamt);

        var ttldiv = document.createElement("div");
        // var dollar = document.createElement("span");
        // dollar.textContent = " $ " ;
        var total = document.createElement("p");
        ttldiv.classList.add("ttldiv_dollar")
        var t = Number(elem.price);
        total.textContent = t;
        // console.log(t)
        totally_total = totally_total+t;
        ttldiv.append(total);


        
        cartdivs.append(imgdiv, desdiv, decramtdiv, qtydiv, incramtdiv,ttldiv);
        
        var cross = document.createElement("button");    
        cross.textContent =  "remove";
        cross.addEventListener("click", function(){
            removeProduct(index);
        });
        cross.classList.add("cross_cls");      
        

       
        document.getElementById("cartdatadisplay").append(cartdivs, cross);

        

    });   
    
    // var num = Number(37);
    sub.textContent = totally_total.toFixed(2);
   
    n = n + totally_total; 
    console.log(n , "n-before")
    whole_total.textContent = n;
    console.log(whole_total.value, "not increment")
    
   localStorage.setItem("totalcartvalue" , totally_total);
      

}

localStorage.setItem("totalcartvalue" , totally_total);

function removeProduct(index){
    dataofaddedcart.splice(index, 1);
    localStorage.setItem("productdetail", JSON.stringify(dataofaddedcart));
    location.reload();
}
// ncrease_qty(qty, elem.price, total, elem ,index)
function increase_qty(q, sp, total, sub, whole_total, elem, index){     
    var q1 = (Number)(q.textContent) + 1;
    q.textContent = q1;
    console.log(q1)
     console.log(sp)


     var pret = Number(total.textContent);
     console.log("pret", pret)
    var newtotal = (q1*sp);
    total.textContent = newtotal.toFixed(1);

    totally_total = totally_total - pret;
    totally_total = totally_total + newtotal;
    sub.textContent = totally_total.toFixed(1);
    n= "";
    var n = 37;
    n = n + totally_total; 
    console.log(n, "n- incr")
    whole_total.textContent = n;

    console.log(whole_total, " increment")
    // whole_total.textContent  = sub.textContent;
    // console.log("sub", sub);  
    
    elem.qty = Number(q1);                       //added by aman
    localStorage.setItem("cartdata" ,JSON.stringify( dataofaddedcart));     // Added by aman
    localStorage.setItem("totalcartvalue" , totally_total.toFixed(1));
    // localStorage.setItem("totalsavings" , )
   
 
 
 }
 // decrease function
 function decrease_qty(q, sp, total, sub, whole_total, elem, index){
     
     var qtemp = Number(q.textContent);
   
     if(qtemp > 1){
         var q1 = (Number)(q.textContent) - 1;
         q.textContent = q1;
        var pret = Number(total.textContent);
         var newtotal = (q1*sp);
         total.textContent = newtotal.toFixed(1);
     
         totally_total = totally_total - pret;
         totally_total = totally_total + newtotal;
         sub.textContent = totally_total.toFixed(1);

         n= "";
         var n = 37;
         n = n + totally_total; 
         console.log(n, "n- incr")
         whole_total.textContent = n;
 
         elem.qty = Number(q1);                 
         localStorage.setItem("productdetail" ,JSON.stringify( dataofaddedcart));    
 
         localStorage.setItem("totalcartvalue" , totally_total.toFixed(1));
 
     }else{
         removeProduct(index);
     }
  
  }

  var count = 1;
var save = 0;

// var q = document.getElementById("itemm");
// q.textContent = "";
// q.textContent = quantity;





