import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
// import GadgetContainer from "./GadgetContainer";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const Gadgets = ({ categories }) => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-black text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex gap-5 flex-col md:flex-row my-10">
        <ButtonContainer categories={categories} gadgets={gadgets} />

        <Outlet />
      </div>
    </div>
  );
};
Gadgets.propTypes = {
  categories: PropTypes.array,
};

export default Gadgets;
