import { useLoaderData } from "react-router-dom";
import cooking from "../../assets/cooking.png";
import { Rating } from "@smastrom/react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFireBurner } from "@fortawesome/free-solid-svg-icons";
import RecipeModal from "../utilities/RecipeModal";
import { useState } from "react";

const ChefDetails = () => {
  const { name, image, bio, experience, likes, number_of_recipes, recipes } =
    useLoaderData();

  const [data, setData] = useState({});

  return (
    <div className="px-2 lg:px-72 my-10">
      <div className="grid lg:grid-cols-3 bg-base-100 rounded-md">
        <div className="col-span-1 h-96 p-5">
          <img
            src={image}
            alt="profile"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="lg:col-span-2 p-5">
          <h1 className="text-4xl uppercase font-bold text-alabamaCrimson">
            {name}
          </h1>
          <p className="my-2">{bio}</p>
          <p>
            <span className="text-alabamaCrimson me-2 font-bold">
              Experience:
            </span>
            {experience}
          </p>
          <div>
            <p>
              <span className="text-alabamaCrimson me-2 font-bold">
                Number of Recipes:
              </span>
              {number_of_recipes} (Items)
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1>Recipes</h1>
        <div className="grid gap-5 lg:grid-cols-4">
          {recipes.map((e, index) => (
            <div
              key={index}
              className="col-span-1 bg-base-100 p-8 text-center rounded-md"
            >
              <img src={cooking} alt="cooking" className="w-24 mx-auto" />
              <h1 className="my-3 font-bold">{e.name}</h1>
              <p className="text-xs">Rating ({e.rating})</p>
              <Rating
                style={{
                  maxWidth: 80,
                  margin: "0 auto",
                }}
                readOnly
                value={e.rating}
              />
              <label
                onClick={() => setData(e)}
                htmlFor="my-modal"
                className="w-full p-2 mt-3 bg-alabamaCrimson text-white rounded-md inline-block cursor-pointer"
              >
                <FontAwesomeIcon icon={faFireBurner} className="me-2" />
                How to Make
              </label>
            </div>
          ))}
        </div>
      </div>
      <RecipeModal data={data} />
    </div>
  );
};

export default ChefDetails;
