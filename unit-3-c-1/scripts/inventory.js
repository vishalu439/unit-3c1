function append(){

    let data=JSON.parse(localStorage.getItem('products')) || [];
    let container =document.getElementById("all_products");
    container.innerHTML=null;
    
    data.forEach(function (el,index){
    
   let div=document.createElement("div");
    
    let type=document.createElement("h1");
    type.innerText=el.type;
    let desc=document.createElement("h1");
    desc.innerText=el.desc;
    let price=document.createElement("h1");
    price.innerText=el.price;
    let img=document.createElement("img");
    img.src=el.image;
   
    let remove_product=document.createElement("button");
    remove_product.innerText=("Remove")
    remove_product.addEventListener("click", function(){
    
    
        remove(index)
    })
    
    
    
    
    div.append(type,desc,price,img,remove_product)
    all_products.append(div)
    
    
    
    
    
    
    
    
    
    
    
    })
        
    
    
    
    
    
    
    
    
    
    }
    
    append()


    function remove(index){

        let data=JSON.parse(localStorage.getItem('products')) || [];
        let newData=data.filter(function (el,i){
           if(i==index){
    
            let trash=JSON.parse(localStorage.getItem('trash')) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
    
           }
           else{
    
                  return i!==index;
    
    
    
           }
    
    
    
        })
    
    
    
    localStorage.setItem("products",JSON.stringify(newData));
    append()

    }
