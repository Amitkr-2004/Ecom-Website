const cartValue=document.querySelector('#cartValue')

export const UpdateCartValue = (cartProduct) =>{
    if(cartValue){
        return (cartValue.innerHTML =`<i class="fa-solid fa-cart-shopping"> ${cartProduct.length} </i>`);
    }
    else{
        console.log("Can't retrieve anything")
    }
};