import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      {/* Dynamic */}
      <div className="min-h-[calc(100vh-400px)] container mx-auto p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
