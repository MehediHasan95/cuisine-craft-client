import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sausage from "../../assets/sausage.png";
import drinking from "../../assets/drinking.png";
import meat from "../../assets/meat.png";
import vegan from "../../assets/vegan.png";

const OutMenu = () => {
  return (
    <div className="px-2 lg:px-72 my-32">
      <h1 className="text-4xl font-bold uppercase text-center mb-10">
        Our <span className="text-alabamaCrimson">Menu</span>
      </h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 bg-base-100 p-5 rounded-md text-center">
          <img src={sausage} alt="sausage" className="w-20 mx-auto" />
          <h1 className="text-2xl font-bold my-3">Sausage Meal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          </p>
        </div>
        <div className="col-span-1 bg-base-100 p-5 rounded-md text-center">
          <img src={drinking} alt="drinking" className="w-20 mx-auto" />
          <h1 className="text-2xl font-bold my-3">Drinking Hour</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          </p>
        </div>
        <div className="col-span-1 bg-base-100 p-5 rounded-md text-center">
          <img src={meat} alt="meat" className="w-20 mx-auto" />
          <h1 className="text-2xl font-bold my-3">Meat Loaf</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          </p>
        </div>
        <div className="col-span-1 bg-base-100 p-5 rounded-md text-center">
          <img src={vegan} alt="vegan" className="w-20 mx-auto" />
          <h1 className="text-2xl font-bold my-3">Vegan Meal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutMenu;
