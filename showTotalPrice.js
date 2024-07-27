import { getCartProductsFromLS } from "./getCartProducts"

export const showTotalPrice = () =>{
    let productSubTotal=document.querySelector('.productSubTotal');
    let productTax=document.querySelector('.productTax');
    let productFinalTotal=document.querySelector('.productFinalTotal');

    let LocalStorageProduct=getCartProductsFromLS();
    let sum=0;
    LocalStorageProduct.forEach((currProd)=>{
        sum+=parseInt(currProd.productPrice);
    })

    productSubTotal.innerHTML=`₹${sum}`;

    let val=productTax.innerHTML;
    let tax=parseInt(val.replace('₹',''));

    if(sum!=0){                         //while removing it if sum == 0 return 0
        productFinalTotal.innerHTML=`₹${sum+tax}`;
    }
    else{
        productFinalTotal.innerHTML=`₹${0}`;
    }
}