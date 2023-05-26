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

const ChefProfile = () => {
  const { chef } = useContext(ChefContext);

  return (
    <div className="px-2 lg:px-72 my-32">
      <h1 className="text-4xl font-bold uppercase text-center mb-10">
        Our Best <span className="text-yellowOrange">Chef</span>
      </h1>
      {chef.length > 0 ? (
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
          {chef?.slice(0, 3).map((e) => (
            <div key={e.id} className="bg-base-100 overflow-hidden rounded-md">
              <div className="h-96">
                <img
                  src={e.image}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h1 className="text-xl font-bold text-yellowOrange">
                  {e.name}
                </h1>
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
      ) : (
        <div className="flex justify-center">
          <Oval
            height={50}
            width={50}
            color="#FD9800"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#ffc266"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </div>
      )}
      <p className="text-right my-5 text-yellowOrange hover:underline font-bold">
        <Link to="/allchef">See more</Link>
      </p>
    </div>
  );
};

export default ChefProfile;
