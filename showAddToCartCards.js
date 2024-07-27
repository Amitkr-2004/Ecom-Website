
import products from './api/productInfo.json'
import { FetchProductsQuantityAndPrice } from './FetchProductsQuantityAndPrice';
import { getCartProductsFromLS } from './getCartProducts';
import { IncrementDecrement } from './IncrementDecrement';
import { removeFromCart } from './removeFromCart';
import { showTotalPrice } from './showTotalPrice';

let cartProducts=getCartProductsFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

// Now Basically we need to find all the data of a particular card
// console.log(filterProducts)

const productContainer = document.querySelector('#productCartContainer')
const templateContainer = document.querySelector('#productCartTemplate')


const showCartProducts = () =>{
    filterProducts.forEach((curProd)=>{
      const {id,name,category,price,stock,description,image} = curProd;

      const productClone=document.importNode(templateContainer.content,true)

      productClone.querySelector("#cardValue").setAttribute('id',`card${id}`)
      productClone.querySelector('.category').textContent=category;
      productClone.querySelector('.productImage').src=image;
      productClone.querySelector('.productName').textContent=name;

      let product = FetchProductsQuantityAndPrice(id);
      

      productClone.querySelector('.productPrice').textContent=product.productPrice;
      productClone.querySelector('.productQuantity').textContent=product.productQuantity;

      productClone
      .querySelector('.stockElement')
      .addEventListener('click',(event)=>{
        IncrementDecrement(event,id,price,stock);
      })

      productClone
      .querySelector('.remove-to-cart-button')
      .addEventListener('click',()=>{
        removeFromCart(id);
      })
      productContainer.append(productClone)
    })
}

//function calling to show the function
showCartProducts();

showTotalPrice();   //to show the final bill at the bottom