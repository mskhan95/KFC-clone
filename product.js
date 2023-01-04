var all_items = [
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
    price: "₹699.00",
    description: "Save Rs. 111 & get 6pc signature Hot & crispy chicken [Serves 2-3]"
}

]


function append(all_items, id){
    all_items.forEach((ele,ind)=>{

        let div = document.createElement("div");
        div.class = "productdiv"
        // div.width = 200;
        // div.height = 32%;
        

        let img = document.createElement("img");
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
        rate.textContent = ele.price;

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

let arr = JSON.parse(localStorage.getItem("productdetail")) || [];
function addtocart(ele, ind){
alert("Product Added in Cart");
arr.push(ele);
localStorage.setItem("productdetail", JSON.stringify(arr));
}

append(one_items,"exclusiveDeal");
append(all_items,"chickenBuckets");
append(all_items,"newLaunch");
append(all_items,"biryaniBuckets");
append(all_items,"boxMeals");
append(all_items,"Burgers");
append(all_items,"stayHomeSpecials");
append(all_items,"Snacks");
append(all_items,"Beverages");