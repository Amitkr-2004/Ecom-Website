
import products from './api/productInfo.json'
import { FetchProductsQuantityAndPrice } from './FetchProductsQuantityAndPrice';
import { getCartProductsFromLS } from './getCartProducts';

let cartProducts=getCartProductsFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

// Now Basically we need to find all the data of a particular card
console.log(filterProducts)

const productContainer = document.querySelector('#productCartContainer')
const templateContainer = document.querySelector('#productCartTemplate')


const showCartProducts = () =>{
    filterProducts.forEach((curProd)=>{
      const {id,name,category,price,stock,description,image} = curProd;

      const productClone=document.importNode(templateContainer.content,true)

      productClone.querySelector('.category').textContent=category;
      productClone.querySelector('.productImage').src=image;
      productClone.querySelector('.productName').textContent=name;

      let product = FetchProductsQuantityAndPrice(id);
      

      productClone.querySelector('.productPrice').textContent=product.productPrice;
      productClone.querySelector('.productQuantity').textContent=product.productQuantity;

      productContainer.append(productClone)
    })
}

//function calling to show the function
showCartProducts();

