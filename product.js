let all_items = [
    {
        id: "1",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=11.35",
        name: "Friendship Bucket",
        category: "Non veg",
        serving: "3",
        qty:1,
        price: 699.00,
        description: "Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn",
        search:"Friendship"
    },
    {
        id: "2",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=11.35",
        name: "Bucket for Two",
        category: "Non veg",
        serving: "2",
        qty:1,
        price: 599.00,
        description: "Flat Rs. 70 off on 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & Large Popcor",
        search:"Bucket"
    },
    {
        id: "3",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32169-0.jpg?ver=11.35",
        name: "Ultimate Savings Bucket",
        category: "Non veg",
        serving: "2-3",
        qty:1,
        price: 699.00,
        description: "Save 30% on 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a Pepsi PET",
        search:"Ultimate"
    },
    {
        id: "4",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32293-0.jpg?ver=11.35",
        name: "Big 12",
        category: "Non veg",
        serving: "2-3",
        qty:1,
        price: 729.00,
        description: "Save 22% on this combo of 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 creamy dips",
        search:"Big"
    },
    {
        id: "5",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31946-0.jpg?ver=11.35",
        name: "Mingles Bucket Meal",
        category: "Non veg",
        serving: "2",
        qty:1,
        price: 459.00,
        description: "Save Rs.55 on this combo of 4 Wings, 2 Chicken Strips, Reg Popcorn, Medium Fries & Pepsi PET",
        search:"Mingles"
    },
    {
        id: "6",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32197-0.jpg?ver=11.35",
        name: "Big 8",
        category: "Non veg",
        serving: "2-3",
        qty:1,
        price: 619.00,
        description: "Save 30% on this bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken",
        search:"Bi"
    }
]

var one_items = [
{
    id: "9",
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000240.jpg?ver=23.97",
    name: "The Allu Arjun Combo",
    category: "Non veg",
    serving: "2-3",
    qty:1,
    price: 448.57,
    description: "Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip"
}
]


var arrlength = document.getElementById("array_length")
 let length = JSON.parse(localStorage.getItem("productdetail")) || [];

let name = localStorage.getItem("name");
document.getElementById("uesr_name").textContent = "";
document.getElementById("uesr_name").append(name);

let City = localStorage.getItem("City");
document.getElementById("btnbtn").innerHTML = null;
document.getElementById("cityname").textContent = "";
document.getElementById("cityname").append(City);


call();

async function call(){

    // let data =await fetch("https://wild-rose-cape-buffalo-kit.cyclic.app/posts");
    // let data1 =await fetch("https://wild-rose-cape-buffalo-kit.cyclic.app/posts");
    // finaldata =await data.json();
    // finaldata1 =await data1.json();
    append(all_items,"chickenBuckets");
    append(all_items,"newLaunch");
    append(all_items,"biryaniBuckets");
    append(all_items,"boxMeals");
    append(all_items,"Burgers");
    append(all_items,"stayHomeSpecials");
    append(all_items,"Snacks");
    append(all_items,"Beverages");
    append(one_items,"exclusiveDeal");
}

 function append(data, id){
    
    data.forEach((ele,ind)=>{

        let div = document.createElement("div");
        div.class = "productdiv"
        

        let img = document.createElement("img");
        img.id = "corner"
        img.src = ele.image;
        img.width = 300;

        let div1 = document.createElement("div");
        div1.className = "discribtion";
        
        let name = document.createElement("div");
        name.textContent = ele.name;
        name.id = "Productname";

        let cate = document.createElement("p");
        let imglogo = document.createElement("img");
        imglogo.src = "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg";
        cate.textContent =  ele.category+" || "+"Serves "+ele.serving;

        let rate = document.createElement("p");
        rate.id = "pricecss"
        rate.textContent = "₹"+ele.price;

        let dis = document.createElement("p");
        dis.textContent = ele.description;

        div1.append(name,imglogo,cate,rate,dis)

            
        let div2 = document.createElement("div");
        div2.className = "btnprop";
        
        let btn = document.createElement("button");
        btn.textContent = "Add to Cart";
        btn.id = "btn";
        btn.addEventListener("click", function(){ 
            addtocart(ele, ind);
        })

        div2.append(btn);
        div.append(img, div1, div2);
        document.getElementById(id).append(div);

    })
      
}

let x = 1;
let arr = JSON.parse(localStorage.getItem("productdetail")) || [];

function addtocart(ele, ind){
alert("Product Added in Cart");

var flag=0;
arr.map(function(elem)

{
    if(ele.name==elem.name)
    {

        elem.qty++; 
        flag++;
        localStorage.setItem("productdetail", JSON.stringify(arr)); 
    }
    
    
})

if(flag===0)
{
    arr.push(ele);
    localStorage.setItem("productdetail", JSON.stringify(arr));
}
call1();
}



function call1(){
var totalpro = 0;
    var arr1 = JSON.parse(localStorage.getItem("productdetail")) || [];
    arr1.map(function(ele){
    totalpro+=ele.qty;
    console.log(totalpro)
    var arrlength = document.getElementById("array_length")
    arrlength.textContent = totalpro;
    localStorage.setItem("count", totalpro);
})
 
}

document.getElementById("sea").addEventListener("click", search)

function search(){
    let input = document.getElementById("input_box").value;
 var filterdata = all_items.filter((ele)=>{
        return ele.search == input;
    })
    document.getElementById("maincon").innerHTML = "";
    append(filterdata, "maincon");

    function append(data, id){
    
        data.forEach((ele,ind)=>{
    
            let div = document.createElement("div");
            div.class = "productdiv"
            
            let maindiv = document.createElement("div");
            maindiv.setAttribute("class", "menudiv")

            let img = document.createElement("img");
            img.id = "corner"
            img.src = ele.image;
            img.width = 300;
    
            let div1 = document.createElement("div");
            div1.className = "discribtion";
            
            let name = document.createElement("div");
            name.textContent = ele.name;
            name.id = "Productname";
    
            let cate = document.createElement("p");
            let imglogo = document.createElement("img");
            imglogo.src = "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg";
            cate.textContent =  ele.category+" || "+"Serves "+ele.serving;
    
            let rate = document.createElement("p");
            rate.id = "pricecss"
            rate.textContent = "₹"+ele.price;
    
            let dis = document.createElement("p");
            dis.textContent = ele.description;
    
            div1.append(name,imglogo,cate,rate,dis)
    
                
            let div2 = document.createElement("div");
            div2.className = "btnprop";
            
            let btn = document.createElement("button");
            btn.textContent = "Add to Cart";
            btn.id = "btn";
            btn.addEventListener("click", function(){ 
                addtocart(ele, ind);
            })
    
            div2.append(btn);
            div.append(img, div1, div2);
            maindiv.append(div);

            document.getElementById(id).append(maindiv);
    
        })
          
    }

}


$(function(){
    $("#foot").load("./footer.html"); 
});



