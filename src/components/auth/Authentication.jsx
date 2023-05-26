import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import { AuthContext } from "../../provider/AuthProvider";
import { Oval } from "react-loader-spinner";

const Authentication = () => {
  const {
    signInWithGoogle,
    signInWithGithub,
    createUser,
    updateUserDisplayName,
    userSignIn,
  } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const displayNameField = useRef(null);
  const emailField = useRef(null);
  const paasswordField = useRef(null);
  const photoURLField = useRef(null);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => navigate(from, { replace: true }))
      .catch((error) => setErrMsg(error));
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => navigate(from, { replace: true }))
      .catch((error) => setErrMsg(error));
  };

  const handleAuthentication = (e) => {
    e.preventDefault();
    setLoader(true);
    const displayName = displayNameField?.current?.value;
    const email = emailField?.current?.value;
    const password = paasswordField?.current?.value;
    const photoURL = photoURLField?.current?.value;

    if (displayName && photoURL) {
      createUser(email, password)
        .then(() => {
          updateUserDisplayName(displayName, photoURL)
            .then(() => {
              navigate(from, { replace: true });
              setLoader(false);
            })
            .catch((error) => {
              setErrMsg(error.code);
              setLoader(false);
            });
        })
        .catch((error) => {
          setErrMsg(error.code);
          setLoader(false);
        });
    } else {
      userSignIn(email, password)
        .then(() => {
          navigate(from, { replace: true });
          setLoader(false);
        })
        .catch((error) => {
          setErrMsg(error.code);
          setLoader(false);
        });
    }
  };

  return (
    <div className="min-h-[75vh] grid place-items-center">
      <div className="w-11/12 lg:w-2/6 p-5 bg-base-100 rounded-md">
        <form onSubmit={handleAuthentication}>
          <Link
            to="/"
            className="px-2 my-8 text-3xl flex justify-center items-center"
          >
            <img src={logo} alt="logo" className="w-8" />
            <span className="font-lobster font-bold">
              Cuisine<span className="text-alabamaCrimson">Craft</span>
            </span>
          </Link>

          {toggle && (
            <input
              type="text"
              pattern="[a-z A-Z]{0,}"
              ref={displayNameField}
              className="w-full p-3 mb-2 rounded-md border-none outline-none focus:outline-alabamaCrimson bg-base-300"
              placeholder="Name"
              required
            />
          )}
          <input
            type="email"
            pattern="[\S+@\S+\.\S+]{0,}"
            ref={emailField}
            className="w-full p-3 mb-2 rounded-md border-none outline-none focus:outline-alabamaCrimson bg-base-300"
            placeholder="Email ID"
            required
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              pattern="[a-zA-Z0-9]{6,}"
              ref={paasswordField}
              className="w-full p-3 mb-2 rounded-md border-none outline-none focus:outline-alabamaCrimson bg-base-300"
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              onClick={() => setShowPass(!showPass)}
              icon={showPass ? faEye : faEyeSlash}
              className="text-xl absolute top-3 right-3 cursor-pointer text-alabamaCrimson"
            />
          </div>
          {toggle && (
            <input
              type="text"
              ref={photoURLField}
              className="w-full p-3 mb-2 rounded-md border-none outline-none focus:outline-alabamaCrimson bg-base-300"
              placeholder="PhotoURL"
              required
            />
          )}
          <button className="w-full flex justify-center p-3 bg-alabamaCrimson text-white uppercase rounded-md border-none outline-none">
            {toggle ? (
              <>
                {loader ? (
                  <Oval
                    height={25}
                    width={25}
                    color="#ffffff"
                    secondaryColor="#f2f2f2"
                    visible={true}
                    strokeWidth={4}
                    strokeWidthSecondary={4}
                  />
                ) : (
                  "Register"
                )}
              </>
            ) : (
              <>
                {loader ? (
                  <Oval
                    height={25}
                    width={25}
                    color="#ffffff"
                    secondaryColor="#f2f2f2"
                    visible={true}
                    strokeWidth={4}
                    strokeWidthSecondary={4}
                  />
                ) : (
                  "Login"
                )}
              </>
            )}
          </button>
          <p className="text-center my-5 text-red-500">{errMsg}</p>
        </form>
        <p className="text-center my-5">
          {toggle ? "Already have an account" : "Don't have an account"}
          <button
            onClick={() => setToggle(!toggle)}
            className="ms-2 text-alabamaCrimson underline hover:font-bold"
          >
            {toggle ? "Login" : "Register"}
          </button>
        </p>
        <p className="text-center my-3 text-gray-400">- or continue with -</p>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="hover:bg-base-300 p-2 rounded-md flex items-center mx-3"
          >
            <img src={google} alt="google" className="w-8 me-2" />
            <span>Google</span>
          </button>
          <button
            onClick={handleGithubSignIn}
            className="hover:bg-base-300 p-2 rounded-md flex items-center mx-3"
          >
            <img src={github} alt="github" className="w-8 me-2" />
            <span>Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
