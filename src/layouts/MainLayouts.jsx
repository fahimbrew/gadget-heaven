import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      {/* Dynamic */}
      <div className="min-h-[calc(100vh-400px)] container mx-auto md:p-5 p-2">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayouts;
