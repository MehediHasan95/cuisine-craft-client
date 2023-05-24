import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-erieBlack text-white lg:px-72">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu-compact dropdown-content mt-3 p-2 shadow bg-erieBlack rounded-md w-96 uppercase"
          >
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <p
                    className={
                      isActive
                        ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                        : "px-4 py-2 rounded-md cursor-pointer"
                    }
                  >
                    Home
                  </p>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">
                {({ isActive }) => (
                  <p
                    className={
                      isActive
                        ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                        : "px-4 py-2 rounded-md cursor-pointer"
                    }
                  >
                    About
                  </p>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                {({ isActive }) => (
                  <p
                    className={
                      isActive
                        ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                        : "px-4 py-2 rounded-md cursor-pointer"
                    }
                  >
                    Blog
                  </p>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                {({ isActive }) => (
                  <p
                    className={
                      isActive
                        ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                        : "px-4 py-2 rounded-md cursor-pointer"
                    }
                  >
                    Contact
                  </p>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="px-2 text-3xl flex items-center">
          <img src={logo} alt="logo" className="w-8" />
          <span className="font-lobster font-bold">
            Cuisine<span className="text-yellowOrange">Craft</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex uppercase">
        <ul className="menu-horizontal">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer"
                  }
                >
                  Home
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/chef">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer"
                  }
                >
                  Chef
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer"
                  }
                >
                  Blog
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer"
                  }
                >
                  About
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-yellowOrange px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer"
                  }
                >
                  Contact
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="px-2">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
