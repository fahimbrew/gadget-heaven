import { useEffect, useState } from "react";
import DashboardBanner from "../components/DashboardBanner";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getAllGadgets, removeCart } from "../Utils";

const Dashboard = () => {
  const [active, setActive] = useState(true);
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState(data);

  useEffect(() => {
    const allGadgets = getAllGadgets();
    setGadgets(allGadgets);
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
  return (
    <div>
      <DashboardBanner handleClick={handleClick} />
      <div>
        {active ? (
          <Cart handleRemove={handleRemove} gadgets={gadgets} />
        ) : (
          <Wishlist />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
