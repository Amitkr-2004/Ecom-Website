import { getCartProductsFromLS } from "./getCartProducts";

const cartProducts=getCartProductsFromLS();

export const FetchProductsQuantityAndPrice = (id) =>{

    const product = cartProducts.find((curProd)=>   curProd.id === id)
    
    let productPrice = product.productPrice;
    let productQuantity=product.productQuantity;
    
    return {productPrice,productQuantity}
    
}