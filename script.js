var wrapperEle = document.body
var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"Oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"Orange"
  }
];

const foods = [];

function call () {
var that = this;
this.ele = document.createElement("div");
this.ele.classList.add('popUp');
that.ele.style.visibility = "visible";
var callingEle = document.createElement("h1");
callingEle.innerHTML = "If I click on the popUp div, it should hide it.";
this.ele.appendChild(callingEle);
this.ele.addEventListener("click", function(x){
that.ele.style.visibility = "hidden"
})  
wrapperEle.appendChild(this.ele);
}


function layout(name, price, image){
  var that = this;
  this.product[1].name = name;
  this.product[1].price = price;
  this.product[1].image = image;
  this.name = name;
  this.price = price;
  this.image = image;
};

for (var i=0; i<foods.length; i++){
foods.push(new layout(products[i].image,products[i].name,products[i].price))
this.popupContent0.src = foods[i].image;
this.popupContent1.innerHTML = foods[i].name;
this.popupContent2.innerHTML = foods[i].price;
};




layout.prototype.item00 = function(){
var popupdiv = document.createElement("div");
  popupdiv.classList.add('popUp');
  popupdiv.addEventListener("click",function(){
    popupdiv.style.visibility = "hidden"
  });
var popupContent0 = document.createElement("img");
  popupdiv.classList.add('popUp_img');
var popupContent1 = document.createElement("h1");
var popupContent2 = document.createElement("h2");
popupContent0.src = this.image;
popupContent1.innerHTML = this.name;
popupContent2.innerHTML = this.price;
popupdiv.appendChild(popupContent0);
popupdiv.appendChild(popupContent1);
popupdiv.appendChild(popupContent2);
wrapperEle.appendChild(popupdiv);
};

for (var i=0; i<products.length; i++){
  var layoutEle= document.createElement("div");
  this.layoutEle.addEventListener("click", function(){
  layout.prototype.item00();
  layout.prototype.item01();
    
  });
  this.layoutEle.classList.add("product");
  var layoutContent0 = document.createElement("img");
  this.layoutContent0.classList.add("product_img");
  var layoutContent1 = document.createElement("h2");
  var layoutContent2 = document.createElement("h2");
  
  
  layoutEle.appendChild(layoutContent0);
  layoutEle.appendChild(layoutContent1);
  layoutEle.appendChild(layoutContent2);
  wrapperEle.appendChild(layoutEle);
  
 layoutContent0.src = products[i].image;
 layoutContent1.innerHTML = products[i].name;
 layoutContent2.innerHTML = products[i].price;
};







call();