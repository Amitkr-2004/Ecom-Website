export const homeQuantityToggle = (event,id,stock) =>{
    const product=document.querySelector(`#card${id}`);   //as the id name is changed to card1,card2.... in homeProduct.js
    // console.log(product);

    const productQuantity = product.querySelector(".productQuantity");
    // console.log(productQuantity);

    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;    //getting the attribute which is set before else initially 1

    if(event.target.className === 'cartIncrement'){
        if(quantity<stock){
            quantity+=1;
        }
        else if(quantity==stock){
            quantity=stock;
        }
    }

    if(event.target.className === 'cartDecrement'){
        if(quantity>1){
            quantity-=1;
        }
    }

    productQuantity.innerHTML=quantity;
    productQuantity.setAttribute('data-quantity',quantity);         //setting the attribute data-quantity to new quantity after increment or decrement
    return quantity;
}