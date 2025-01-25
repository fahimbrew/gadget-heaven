import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "../components/DetailsBanner";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  //   console.log(params);
  const [gadget, setGadget] = useState({});
  useEffect(() => {
    if (product_id) {
      const gadget = data.find((item) => item.product_id === product_id);
      setGadget(gadget);
    }
  }, [data, product_id]);
  return (
    <div>
      <DetailsBanner gadget={gadget} />
    </div>
  );
};

export default ProductDetails;
