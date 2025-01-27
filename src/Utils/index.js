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

// remove the "cart"
const removeStorage = () =>{
    const gadgets = getAllGadgets();
    localStorage.removeItem("carts",JSON.stringify(gadgets));
}


//  get all the wishlist gadgets

const getAllWishList = ()=>{
    const all = localStorage.getItem("wishlist");
    if(all){
        const wishGadgets = JSON.parse(all);
        return wishGadgets;
    }else{
        return [];
    }

}


// add to wishlist cart

const addToWishlist = (gadget)=>{
    // console.log(gadget);
    const wishlistGadgets = getAllWishList();
    const isExist = wishlistGadgets.find(item=>item.product_id === gadget.product_id);
    if(isExist) return toast.error("Favorites already exist");
    wishlistGadgets.push(gadget);
    localStorage.setItem("wishlist",JSON.stringify(wishlistGadgets));
    // console.log(wishlistGadgets);
    toast.success("added to favorites");
}

//  remove items from wish card

const removeWish = (gadget)=>{
    const wishGadgets = getAllWishList();
    const remaining = wishGadgets.filter(item=>item.product_id!==gadget.product_id);
    localStorage.setItem("wishlist",JSON.stringify(remaining));
    toast.success("Removed from favorites")
}














export {addToCart,getAllGadgets,removeCart,getAllWishList,addToWishlist,removeWish,removeStorage}