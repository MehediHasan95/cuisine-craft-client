import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
