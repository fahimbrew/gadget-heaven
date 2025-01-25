import PropTypes from "prop-types";
import Card from "./Card";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const GadgetContainer = () => {
  const { category } = useParams();
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = data.filter(
        (item) => item.category === category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(data);
    }
  }, [data, category]);

  //   console.log(category);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 border border-gray-200 rounded-3xl">
        {gadgets.map((gadget, index) => (
          <Card key={index} gadget={gadget}></Card>
        ))}
      </div>
    </div>
  );
};
GadgetContainer.propTypes = {
  gadgets: PropTypes.array,
};
export default GadgetContainer;
