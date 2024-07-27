export const showToast = (operation,id) =>{
    const toast=document.createElement('div');//creates new element to add toast property and its text

    toast.classList.add('toast');   //adds the css styling to toast

    if(operation=='add'){
        toast.textContent=`The Product With ProductID ${id} has been Added`
    }
    else{
        toast.textContent=`The Product With ProductID ${id} has been Deleted`
    }

    document.body.appendChild(toast)

    setTimeout(() => {
        toast.remove();
    }, 2000);
}