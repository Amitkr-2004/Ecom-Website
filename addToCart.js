import { getCartProductsFromLS } from "./getCartProducts";
import { UpdateCartValue } from "./UpdateCartValue";

getCartProductsFromLS();

export const addToCart = (event,id,stock) =>{
    let arrLocalStorageProduct = getCartProductsFromLS();   //this function basically retrieves all the data stored in LocalStorage 

    let product = document.querySelector(`#card${id}`);
    console.log(product);

    let productQuantity= product.querySelector('.productQuantity').innerHTML;     //as we need only the value not complete paragraph

    let productPrice= product.querySelector('.productPrice').innerHTML;           //as we need only the value not complete paragraph

    // console.log(productQuantity,productPrice);

    productPrice=productPrice.replace('₹','')   //as productPrice contains both a character and integer thus remove symbol

    let existingProd = arrLocalStorageProduct.find((product)=>product.id===id)  //if the product is already present in arrLocalStorageProduct then just return false and as it is an object therefore we need to write a function

    // console.log(existingProd.productQuantity)

    if(existingProd && productQuantity>1){      //this is used for updating the quantity And its price when user has increase the cart value
        productQuantity=Number(productQuantity)+Number(existingProd.productQuantity)    
        productPrice=Number(productPrice*productQuantity);  //converting to number
        
        let updatedCart={id,productPrice,productQuantity}       //now all the new values are added to the updatedCart
        updatedCart = arrLocalStorageProduct.map((currProduct)=>{   //now the new values are added to the array whose id got matched else remains the same
            if(currProduct.id==id)  return updatedCart
            else    return currProduct;
        })
        localStorage.setItem('cartProductsLS',JSON.stringify(updatedCart));
    }
    if(existingProd){
        // alert('already Present')
        return false;
    }

    productPrice=Number(productPrice*productQuantity);  //converting to number 
    productQuantity=Number(productQuantity)     //converting to number

    arrLocalStorageProduct.push({id,productQuantity,productPrice})      //pushing all the data in the array additionally 
    localStorage.setItem('cartProductsLS',JSON.stringify(arrLocalStorageProduct));  //finally converting object to JSON format and inserting in LS
    // console.log(arrLocalStorageProduct.length)

    //updating cart button value
    UpdateCartValue(arrLocalStorageProduct)
}