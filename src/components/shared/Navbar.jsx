import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemesContext } from "../../provider/ThemesProvider";
import { useState } from "react";
import { useEffect } from "react";
import useBookMark from "../../hooks/useBookMark";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { setThemes } = useContext(ThemesContext);
  const [bookMark] = useBookMark();
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogOut = () => {
    logOut().then(() => {
      navigate(from, { replace: true });
    });
  };

  useEffect(() => {
    if (toggle) {
      setThemes("light");
    } else {
      setThemes("dark");
    }
  }, [setThemes, toggle]);

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
                        ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
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
                        ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
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
                        ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
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
                        ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
                        : "px-4 py-2 rounded-md cursor-pointer"
                    }
                  >
                    Contact
                  </p>
                )}
              </NavLink>
            </li>
            <li>
              {user ? (
                <button onClick={handleLogOut} className="px-4 py-2 uppercase">
                  <span className="me-1">Sign Out</span>
                </button>
              ) : (
                <Link to="/authentication">
                  <button className="px-4 py-2 uppercase">
                    <span className="me-1">Login</span>
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="px-2 text-3xl flex items-center">
          <img src={logo} alt="logo" className="w-8" />
          <span className="font-lobster font-bold">
            Cuisine<span className="text-alabamaCrimson">Craft</span>
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
                      ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer hover:text-alabamaCrimson"
                  }
                >
                  Home
                </span>
              )}
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/profile">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
                        : "px-4 py-2 rounded-md cursor-pointer hover:text-alabamaCrimson"
                    }
                  >
                    Profile
                  </span>
                )}
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/allchef">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer hover:text-alabamaCrimson"
                  }
                >
                  All Chef
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
                      ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer hover:text-alabamaCrimson"
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
                      ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer hover:text-alabamaCrimson"
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
                      ? "bg-alabamaCrimson px-4 py-2 rounded-md cursor-pointer"
                      : "px-4 py-2 rounded-md cursor-pointer hover:text-alabamaCrimson"
                  }
                >
                  Contact
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end uppercase">
        <Link to="/favorite-recipes">
          <p className="cursor-pointer me-5 relative">
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
            <sup className="absolute top-0 text-alabamaCrimson font-bold">
              {bookMark.length}
            </sup>
          </p>
        </Link>

        <p>
          <FontAwesomeIcon
            onClick={() => setToggle(!toggle)}
            icon={toggle ? faMoon : faSun}
            className="text-xl cursor-pointer me-5"
          />
        </p>

        {user && (
          <div
            className="avatar tooltip tooltip-bottom tooltip-primary"
            data-tip={user && user?.displayName}
          >
            <div className="w-10 rounded-full">
              <img src={user && user?.photoURL} alt="picture" />
            </div>
          </div>
        )}
        <div className="hidden lg:block">
          {user ? (
            <button
              onClick={handleLogOut}
              className="ms-5 uppercase hover:text-alabamaCrimson hover:font-bold"
            >
              <span className="me-1">Sign out</span>
            </button>
          ) : (
            <Link to="/authentication" className="px-2">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
