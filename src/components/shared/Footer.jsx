import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer lg:px-72 p-10 bg-erieBlack text-white">
        <div>
          <Link to="/" className="px-2 text-3xl flex items-center">
            <img src={logo} alt="logo" className="w-8" />
            <span className="font-lobster font-bold">
              Cuisine<span className="text-alabamaCrimson">Craft</span>
            </span>
          </Link>

          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Recent Recipes</a>
          <a className="link link-hover">Healthy Living</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
