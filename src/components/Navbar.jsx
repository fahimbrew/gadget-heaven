import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
  //   console.log(pathname);
  return (
    <div
      className={`container mx-auto ${
        pathname === "/"
          ? "md:absolute md:z-50 md:p-10 md:text-white left-12"
          : ""
      }`}
    >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#9538E2]"
                        : "hover:bg-[#9538E2] hover:text-white"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statics"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#9538E2]"
                        : "hover:bg-[#9538E2] hover:text-white"
                    }`
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#9538E2]"
                        : "hover:bg-[#9538E2] hover:text-white"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/FAQ"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#9538E2]"
                        : "hover:bg-[#9538E2] hover:text-white"
                    }`
                  }
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#9538E2] bg-amber-100"
                      : "hover:bg-[#9538E2] hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statics"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#9538E2]"
                      : "hover:bg-[#9538E2] hover:text-white"
                  }`
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#9538E2]"
                      : "hover:bg-[#9538E2] hover:text-white"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FAQ"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#9538E2]"
                      : "hover:bg-[#9538E2] hover:text-white"
                  }`
                }
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn rounded-full">
            <FaShoppingCart />
          </a>
          <a className="btn rounded-full">
            <FaHeart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
