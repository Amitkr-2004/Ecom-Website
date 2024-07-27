import { getCartProductsFromLS } from "./getCartProducts";
import { UpdateCartValue } from "./UpdateCartValue";


export const removeFromCart = ((id)=>{
    let cartProducts =  getCartProductsFromLS();
    console.log(cartProducts)
    cartProducts = cartProducts.filter((curProd)=> curProd.id !== id)
    
    localStorage.setItem('cartProductsLS',JSON.stringify(cartProducts));
    
    //to remove the div onclick
    let RemoveProduct = document.getElementById(`card${id}`);
    
    if(RemoveProduct){
        RemoveProduct.remove();
    }
    
    UpdateCartValue(cartProducts);

})