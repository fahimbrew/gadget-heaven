import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Gadgets from "../components/Gadgets";

const Home = () => {
  const categories = useLoaderData();
  //   console.log(categories);
  return (
    <div>
      <Banner />
      <Gadgets categories={categories} />
    </div>
  );
};

export default Home;
