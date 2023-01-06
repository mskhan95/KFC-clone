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