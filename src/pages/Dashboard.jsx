import { useEffect, useState } from "react";
import DashboardBanner from "../components/DashboardBanner";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { useLoaderData } from "react-router-dom";
import {
  addToCart,
  getAllGadgets,
  getAllWishList,
  removeCart,
  removeStorage,
  removeWish,
} from "../Utils";

const Dashboard = () => {
  const [active, setActive] = useState(true);
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState(data);
  const [wishGadgets, setWishGadgets] = useState(data);
  const [cost, setCost] = useState(0);
  // console.log(gadgets);

  useEffect(() => {
    const allGadgets = getAllGadgets();
    const allFavorites = getAllWishList();
    const cost = allGadgets.reduce((total, gadget) => gadget.price + total, 0);
    const totalCost = Math.round(cost);
    setCost(totalCost);
    setGadgets(allGadgets);
    setWishGadgets(allFavorites);
  }, []);

  const handleAdd = (gadget) => {
    addToCart(gadget);
    const allGadgets = getAllGadgets();
    setGadgets(allGadgets);
    const cost = allGadgets.reduce((total, gadget) => gadget.price + total, 0);
    const totalCost = Math.round(cost);
    setCost(totalCost);
  };
  const sortFunc = () => {
    const sorted = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sorted);
  };

  const handleClick = () => {
    setActive(!active);
    // console.log(active);
  };
  const handleRemove = (gadget) => {
    removeCart(gadget);
    const allGadgets = getAllGadgets();
    setGadgets(allGadgets);
    const cost = allGadgets.reduce((total, gadget) => gadget.price + total, 0);
    const totalCost = Math.round(cost);
    setCost(totalCost);
  };

  const handleRemoveWish = (wishGadgets) => {
    removeWish(wishGadgets);
    const allFavorites = getAllWishList();
    setWishGadgets(allFavorites);
  };

  const handleRemoveStorage = () => {
    removeStorage();
    const allGadgets = getAllGadgets();
    setGadgets(allGadgets);
    const cost = allGadgets.reduce((total, gadget) => gadget.price + total, 0);
    const totalCost = Math.round(cost);
    setCost(totalCost);
  };

  return (
    <div>
      <DashboardBanner handleClick={handleClick} />
      <div>
        {active ? (
          <Cart
            cost={cost}
            handleRemove={handleRemove}
            sortFunc={sortFunc}
            gadgets={gadgets}
            handleRemoveStorage={handleRemoveStorage}
          />
        ) : (
          <Wishlist
            handleAdd={handleAdd}
            wishGadgets={wishGadgets}
            handleRemoveWish={handleRemoveWish}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
