import { useContext } from "react";
import { ChefContext } from "../../provider/ChefDataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

const AllChef = () => {
  const { chef } = useContext(ChefContext);
  return (
    <div className="px-2 lg:px-72 my-10">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
        {chef?.map((e) => (
          <div key={e.id} className="bg-base-100 overflow-hidden rounded-md">
            <div className="h-96">
              <img
                src={e.image}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 h-52">
              <h1 className="text-xl font-bold text-yellowOrange">{e.name}</h1>
              <p className="my-2 italic">{e.experience}</p>
              <div className="flex justify-between">
                <div>
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="text-yellowOrange"
                  />
                  <span className="mx-2 text-yellowOrange">Recipes:</span>
                  <span>{e.number_of_recipes} (items)</span>
                </div>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faHeart} className="" /> Favorite
                  </span>
                  <span className="text-yellowOrange">
                    <FontAwesomeIcon icon={faThumbsUp} className="mx-2" />
                    {e.likes.length > 4 ? `${e.likes.slice(0, 2)}K` : e.likes}
                  </span>
                </div>
              </div>
            </div>
            <Link to={`/v1/chefdetails/${e.id}`}>
              <button className="bg-yellowOrange w-full border-none p-2 text-white">
                View Recipes
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
