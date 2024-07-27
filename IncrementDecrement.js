import { getCartProductsFromLS } from "./getCartProducts";
import { showTotalPrice } from "./showTotalPrice";

export const IncrementDecrement = (event,id,productPrice,stock)=>{

    const product=document.querySelector(`#card${id}`)

    const RealPrice=product.querySelector('.productPrice')

    const RealQuantity=product.querySelector('.productQuantity')

    let productQuantity=1;
    let LocalStoragePrice=0;
    const LocalStorageProduct=getCartProductsFromLS(); 

    let existingProd = LocalStorageProduct.find((currProd)=>    currProd.id===id);

    if(existingProd){
        productQuantity=existingProd.productQuantity;
        LocalStoragePrice=existingProd.productPrice;
    }
    else{
        LocalStoragePrice=productPrice;
        productPrice=productPrice;
    }
    
    if(event.target.className === 'cartIncrement'){
        if(productQuantity<stock){
            productQuantity+=1;
        }
        else if(productQuantity==stock){
            productQuantity=stock;
            LocalStoragePrice=productPrice*stock;
        }
    }

    if(event.target.className === 'cartDecrement'){
        if(productQuantity>1){
            productQuantity-=1;
        }
    }

    //finally set the price and quantity
    LocalStoragePrice=productPrice*productQuantity;

    LocalStoragePrice=LocalStoragePrice.toFixed(2);

    //then update the localStorage
        
    let updatedCart={id,productQuantity,productPrice:LocalStoragePrice}       //now all the new values are added to the updatedCart
    updatedCart = LocalStorageProduct.map((currProduct)=>{   //now the new values are added to the array whose id got matched else remains the same
        if(currProduct.id===id)  return updatedCart
        else    return currProduct;
    })
    localStorage.setItem('cartProductsLS',JSON.stringify(updatedCart));

    //Now display on real time data
    RealQuantity.innerText = productQuantity;
    RealPrice.innerText = LocalStoragePrice;

    //to reflex directly to add to cart page
    showTotalPrice();
}