import { useEffect, useState } from "react";
import DashboardBanner from "../components/DashboardBanner";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { useLoaderData } from "react-router-dom";
import {
  getAllGadgets,
  getAllWishList,
  removeCart,
  removeWish,
} from "../Utils";

const Dashboard = () => {
  const [active, setActive] = useState(true);
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState(data);
  const [wishGadgets, setWishGadgets] = useState(data);

  useEffect(() => {
    const allGadgets = getAllGadgets();
    const allFavorites = getAllWishList();
    setGadgets(allGadgets);
    setWishGadgets(allFavorites);
  }, []);
  const handleClick = () => {
    setActive(!active);
    // console.log(active);
  };
  const handleRemove = (gadget) => {
    removeCart(gadget);
    const allGadgets = getAllGadgets();
    setGadgets(allGadgets);
  };

  const handleRemoveWish = (wishGadgets) => {
    removeWish(wishGadgets);
    const allFavorites = getAllWishList();
    setWishGadgets(allFavorites);
  };
  return (
    <div>
      <DashboardBanner handleClick={handleClick} />
      <div>
        {active ? (
          <Cart handleRemove={handleRemove} gadgets={gadgets} />
        ) : (
          <Wishlist
            wishGadgets={wishGadgets}
            handleRemoveWish={handleRemoveWish}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
