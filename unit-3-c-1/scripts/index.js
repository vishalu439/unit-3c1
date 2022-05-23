//store the products array in localstorage as "products"

var form=document.querySelector("form");
form.addEventListener("submit",function(event){
event.preventDefault();


let type=form.type.value;
let desc=form.desc.value;
let price=form.price.value;
let image=form.image.value;

let s1=new product(type,desc,price,image)
let data=JSON.parse(localStorage.getItem('products')) || [];
data.push(s1)
localStorage.setItem('products',JSON.stringify(data))
console.log(s1)

})


function product(n,c,u,i){

this.type=n;
this.desc=c;
this.price=u;
this.image=i;







}
















