import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { UpdateCartValue } from "./UpdateCartValue";

export const addToCart = (event,id,stock) =>{
    let arrLocalStorageProduct = getCartProductsFromLS();   //this function basically retrieves all the data stored in LocalStorage 

    let productID = document.querySelector(`#card${id}`);
    console.log(productID);

    let productQuantity= productID.querySelector('.productQuantity').innerHTML;     //as we need only the value not complete paragraph

    let productPrice= productID.querySelector('.productPrice').innerHTML;           //as we need only the value not complete paragraph

    // console.log(productQuantity,productPrice);

    productPrice=productPrice.replace('₹','')   //as productPrice contains both a character and integer thus remove symbol
    productPrice=Number(productPrice*productQuantity);  //converting to number 
    productQuantity=Number(productQuantity)     //converting to number

    arrLocalStorageProduct.push({id,productQuantity,productPrice})      //pushing all the data in the array additionally 
    localStorage.setItem('cartProductsLS',JSON.stringify(arrLocalStorageProduct));  //finally converting object to JSON format and inserting in LS
    // console.log(arrLocalStorageProduct.length)

    //updating cart buttion value
    UpdateCartValue(arrLocalStorageProduct)
}