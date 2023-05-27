import {
  faHeart,
  faThumbsUp,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ChefCard = ({ chefInfo }) => {
  const { id, image, name, experience, number_of_recipes, likes } = chefInfo;

  return (
    <div key={id} className="bg-base-100 overflow-hidden rounded-md">
      <div className="h-96">
        <img src={image} alt="profile" className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h1 className="text-xl font-bold text-alabamaCrimson">{name}</h1>
        <p className="my-5">
          {experience.length > 90
            ? experience.slice(0, 90) + "..."
            : experience}
        </p>
        <div className="flex justify-between font-semibold">
          <div>
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-alabamaCrimson"
            />
            <span className="mx-2 text-alabamaCrimson">Recipes:</span>
            <span>{number_of_recipes} (items)</span>
          </div>
          <div>
            <span className="me-2 text-alabamaCrimson">
              <FontAwesomeIcon icon={faHeart} className="me-1 cursor-pointer" />
              Favorite
            </span>

            <span className="text-alabamaCrimson">
              {likes.length > 4 ? `${likes.slice(0, 2)}K` : likes}
              <FontAwesomeIcon icon={faThumbsUp} className="ms-1" />
            </span>
          </div>
        </div>
      </div>
      <Link to={`/v1/chefdetails/${id}`}>
        <button className="bg-alabamaCrimson w-full border-none p-2 text-white">
          View Recipes
        </button>
      </Link>
    </div>
  );
};

export default ChefCard;
