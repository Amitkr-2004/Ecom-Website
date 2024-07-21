import { homeQuantityToggle } from "./homeQuantityToggle";
const ProductContainer =document.querySelector('#productContainer')
const ProductTemplate =document.querySelector('#productTemplate')

export const showProductContainer =(products) =>{
    if(!products){
        return false;
    }

    products.forEach((currProduct)=>{
        const {id,name,category,price,stock,description,image} = currProduct;

        const productTemplateClone = document.importNode(ProductTemplate.content,true)     //this will make a clone of the ProductTemplate and true is used so that it can make a copy of descendents of ProductTemplate

        //during filling it no need to maintain the same order of filling as we have cloned our template thus filling of data will be in same order

        //now for identity we need id
        productTemplateClone.querySelector("#cardsValue").setAttribute('id',`card${id}`)     //for randomly setting the id value inplace of id   

        productTemplateClone.querySelector(".category").textContent = category;  //if we want to clone any text then we have to use textContent
        productTemplateClone.querySelector(".productName").textContent=name;
        productTemplateClone.querySelector(".productImage").src = image;  
        productTemplateClone.querySelector(".productImage").alt = name;  
        productTemplateClone.querySelector(".productDescription").textContent = description;
        productTemplateClone.querySelector(".productPrice").textContent = `₹${price}`;
        productTemplateClone.querySelector(".productActualPrice").textContent = `₹${4*price}`;
        productTemplateClone.querySelector(".productStock").textContent=stock;

        //now for toggling the value of cardIncrement and cardDecrement 
        productTemplateClone.querySelector('.stockElement').addEventListener("click",(event)=>{
            homeQuantityToggle(event,id,stock)
        }
        )

        ProductContainer.append(productTemplateClone)
    })
}