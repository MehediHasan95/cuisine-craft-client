import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useContext } from "react";
import { ThemesContext } from "../provider/ThemesProvider";

const Root = () => {
  const { themes } = useContext(ThemesContext);

  return (
    <div data-theme={themes} className="bg-base-300">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
