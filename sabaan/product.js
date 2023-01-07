var finaldata = [
    {
        id: "1",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=11.35",
        name: "Friendship Bucket",
        category: "Non veg",
        serving: "3",
        price: "₹699.00",
        description: "Save 23% on 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [Serves 3]"
    },
    {
        id: "2",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=11.35",
        name: "Bucket for Two",
        category: "Non veg",
        serving: "2",
        price: "₹599.00",
        description: "Flat Rs. 70 off on 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & Large Popcor [Serves 2]"
    },
    {
        id: "3",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32169-0.jpg?ver=11.35",
        name: "Ultimate Savings Bucket",
        category: "Non veg",
        serving: "2-3",
        price: "₹699.00",
        description: "Save 30% on 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a Pepsi PET [Serves 2-3]"
    },
    {
        id: "4",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32293-0.jpg?ver=11.35",
        name: "Big 12",
        category: "Non veg",
        serving: "2-3",
        price: "₹729.00",
        description: "Save 22% on this combo of 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 creamy dips [Serves 2-3]"
    },
    {
        id: "5",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31946-0.jpg?ver=11.35",
        name: "Mingles Bucket Meal",
        category: "Non veg",
        serving: "2",
        price: "₹459.00",
        description: "Save Rs.55 on this combo of 4 Wings, 2 Chicken Strips, Reg Popcorn, Medium Fries & Pepsi PET [Serves 2]"
    },
    {
        id: "6",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32197-0.jpg?ver=11.35",
        name: "Big 8",
        category: "Non veg",
        serving: "2-3",
        price: "₹619.00",
        description: "Save 30% on this bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [Serves 2-3]"
    },
    {
        id: "7",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31897-41326.jpg?ver=11.35",
        name: "5pc Smoky Red Chicken",
        category: "Non veg",
        serving: "2",
        price: "₹429.00",
        description: "Save Rs. 121 & get 5pc Smoky red grilled chicken [Serves 2]"
    },
    {
        id: "8",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30640-40488.jpg?ver=11.35",
        name: "8 pc Hot & Crispy Chicken",
        category: "Non veg",
        serving: "3-4",
        price: "₹699.00",
        description: "Save 26% & get 8pc signature Hot & crispy chicken [Serves 3-4]"
    },
    {
        id: "9",
        image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30636-40484.jpg?ver=11.35",
        name: "6 Pc Hot & Crispy",
        category: "Non veg",
        serving: "2-3",
        price: "₹699.00",
        description: "Save Rs. 111 & get 6pc signature Hot & crispy chicken [Serves 2-3]"
    },

]
var one_items = [
{
    id: "9",
    image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30636-40484.jpg?ver=11.35",
    name: "6 Pc Hot & Crispy",
    category: "Non veg",
    serving: "2-3",
    price: 699,
    description: "Save Rs. 111 & get 6pc signature Hot & crispy chicken [Serves 2-3]"
}
]
var i = 0;
call();
// let finaldata;

async function call(){

    // let data =await fetch("http://localhost:3004/posts");
    // let data1 =await fetch("http://localhost:3004/comments");
    // finaldata =await data.json();
    // finaldata1 =await data1.json();
    append(finaldata,"chickenBuckets");
    append(finaldata,"newLaunch");
    append(finaldata,"biryaniBuckets");
    append(finaldata,"boxMeals");
    append(finaldata,"Burgers");
    append(finaldata,"stayHomeSpecials");
    append(finaldata,"Snacks");
    append(finaldata,"Beverages");
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
        rate.textContent = ele.price;

        let dis = document.createElement("p");
        dis.textContent = ele.description;

        div1.append(name,imglogo,cate,rate,dis)

            
        let div2 = document.createElement("div");
        div2.className = "btnprop";
        // div2.id = `${i}`;
        console.log(div2.id);
        
        let btn = document.createElement("button");
        btn.textContent = "Add to Cart";
        btn.id = "btn";
        btn.addEventListener("click", function(){ 
            addtocart(ele, ind,i);
        })

        div2.append(btn);
        div.append(img, div1, div2);
        document.getElementById(id).append(div);
        i++;

    })
      
}
let x = 1;
let arr = JSON.parse(localStorage.getItem("productdetail")) || [];
function addtocart(ele, ind, id){
alert("Product Added in Cart");

document.querySelector(".btnprop").innerHTML = "";
var newbutton = document.querySelector(".btnprop");
let addbtn = document.createElement("img");
addbtn.className ="addsubsbtn";
addbtn.src = "https://cdn-icons-png.flaticon.com/512/992/992651.png";
let subbtn = document.createElement("img");

let x = 1;
let num = document.createElement("p");
num.className = "addsubsbtn";
num.textContent = x;

subbtn.className = "addsubsbtn";
subbtn.src ="https://cdn-icons-png.flaticon.com/512/66/66889.png";
newbutton.append(addbtn,num, subbtn);

arr.push(ele);
localStorage.setItem("productdetail", JSON.stringify(arr));
}

append(one_items,"exclusiveDeal");