import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/google.png";
import github from "../../assets/github.png";

const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-[75vh] grid place-items-center">
      <div className="w-11/12 lg:w-2/6 p-5 bg-base-100 rounded-md">
        <form>
          <Link
            to="/"
            className="px-2 my-8 text-3xl flex justify-center items-center"
          >
            <img src={logo} alt="logo" className="w-8" />
            <span className="font-lobster font-bold">
              Cuisine<span className="text-yellowOrange">Craft</span>
            </span>
          </Link>

          {toggle && (
            <input
              type="text"
              name="displayName"
              className="w-full p-3 mb-2 rounded-md border-none outline-none focus:outline-yellowOrange bg-base-300"
              placeholder="Name"
            />
          )}
          <input
            type="email"
            name="email"
            className="w-full p-3 mb-2 rounded-md border-none outline-none focus:outline-yellowOrange bg-base-300"
            placeholder="Email ID"
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="w-full p-3 mb-2 rounded-md border-none outline-none focus:outline-yellowOrange bg-base-300"
              placeholder="Password"
            />
            <FontAwesomeIcon
              onClick={() => setShowPass(!showPass)}
              icon={showPass ? faEye : faEyeSlash}
              className="text-xl absolute top-3 right-3 cursor-pointer text-yellowOrange"
            />
          </div>
          {toggle && (
            <input
              type="text"
              name="photoURL"
              className="w-full p-3 mb-2 rounded-md border-none outline-none focus:outline-yellowOrange bg-base-300"
              placeholder="PhotoURL"
            />
          )}
          <button className="w-full p-3 bg-yellowOrange text-white uppercase rounded-md border-none outline-none">
            {toggle ? "Register" : "Login"}
          </button>
        </form>
        <p className="text-center my-5">
          {toggle ? "Already have an account" : "Don't have an account"}
          <button
            onClick={() => setToggle(!toggle)}
            className="ms-2 text-yellowOrange underline hover:font-bold"
          >
            {toggle ? "Login" : "Register"}
          </button>
        </p>
        <p className="text-center my-3 text-gray-400">- or continue with -</p>
        <div className="flex justify-center">
          <button className="hover:bg-base-300 p-2 rounded-md flex items-center mx-3">
            <img src={google} alt="google" className="w-8 me-2" />
            <span>Google</span>
          </button>
          <button className="hover:bg-base-300 p-2 rounded-md flex items-center mx-3">
            <img src={github} alt="github" className="w-8 me-2" />
            <span>Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
