// get all the categories from local storage

import toast from "react-hot-toast";

const getAllGadgets = ()=>{
  const all = localStorage.getItem("carts");
if(all){
    const gadgets = JSON.parse(all);
    return gadgets;
}else{
    return [];
}
}


// add gadget to cart 
const addToCart = (gadget)=>{
    const gadgets = getAllGadgets();
    const isExist = gadgets.find(item=>item.product_id===gadget.product_id);
    if(isExist) return toast.error("already added to cart")
    gadgets.push(gadget);
    localStorage.setItem("carts",JSON.stringify(gadgets));
    toast.success("Successfully added to cart")

}

// remove from the cart

const removeCart = (gadget)=>{
    const gadgets = getAllGadgets();
    const remainingCart = gadgets.filter(item=>item.product_id!==gadget.product_id);
    localStorage.setItem("carts",JSON.stringify(remainingCart));
    toast.success("removed from the cart")


}

export {addToCart,getAllGadgets,removeCart}