import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { UpdateCartValue } from "./UpdateCartValue";

getCartProductsFromLS();

export const addToCart = (event,id,stock) =>{
    let arrLocalStorageProduct = getCartProductsFromLS();   //this function basically retrieves all the data stored in LocalStorage 
    let totalPrice=0;

    let product = document.querySelector(`#card${id}`);
    console.log(product);

    let productQuantity= product.querySelector('.productQuantity').innerHTML;     //as we need only the value not complete paragraph

    let productPrice= product.querySelector('.productPrice').innerHTML;           //as we need only the value not complete paragraph

    // console.log(productQuantity,productPrice);

    productPrice=productPrice.replace('₹','')   //as productPrice contains both a character and integer thus remove symbol

    let existingProd = arrLocalStorageProduct.find((product)=>product.id===id)  //if the product is already present in arrLocalStorageProduct then just return false and as it is an object therefore we need to write a function

    // console.log(existingProd.productQuantity)

    if(existingProd && productQuantity>=1){      //this is used for updating the quantity And its price when user has increase the cart value
        productQuantity=Number(productQuantity)+Number(existingProd.productQuantity)    
        productPrice=Number(productPrice*productQuantity);  //converting to number
        totalPrice=productPrice;
        totalPrice=totalPrice.toFixed(2);

        let updatedCart={id,productPrice:totalPrice,productQuantity}       //now all the new values are added to the updatedCart
        updatedCart = arrLocalStorageProduct.map((currProduct)=>{   //now the new values are added to the array whose id got matched else remains the same
            if(currProduct.id==id)  return updatedCart
            else    return currProduct;
        })
        localStorage.setItem('cartProductsLS',JSON.stringify(updatedCart));
        showToast('add',id);
    }
    if(existingProd){
        // alert('already Present')
        return false;
    }

    productQuantity=Number(productQuantity)     //converting to number
    productPrice=Number(productPrice*productQuantity);  //converting to number 
    totalPrice=productPrice;
    totalPrice=totalPrice.toFixed(2);

    arrLocalStorageProduct.push({id,productQuantity,productPrice:totalPrice})      //pushing all the data in the array additionally 
    localStorage.setItem('cartProductsLS',JSON.stringify(arrLocalStorageProduct));  //finally converting object to JSON format and inserting in LS
    // console.log(arrLocalStorageProduct.length)

    //updating cart button value
    UpdateCartValue(arrLocalStorageProduct)
    showToast('add',id);
}