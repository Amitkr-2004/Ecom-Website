import { UpdateCartValue } from "./UpdateCartValue";

export const getCartProductsFromLS = () =>{
    let CartProducts=localStorage.getItem("cartProductsLS");     //through this all the item from local storage we will get having key value cartProductLS

    if(!CartProducts){      //if cartProductsLS is empty then return empty array
        return [];
    }

    CartProducts=JSON.parse(CartProducts)   //else the CartProducts values which is in JSON format will be parsed to object

    //updating cart button value
    UpdateCartValue(CartProducts);

    return CartProducts;
}