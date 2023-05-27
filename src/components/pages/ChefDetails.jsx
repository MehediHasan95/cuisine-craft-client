import { useLoaderData } from "react-router-dom";
import cooking from "../../assets/cooking.png";
import { Rating } from "@smastrom/react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireBurner,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import RecipeModal from "../utilities/RecipeModal";
import { useState } from "react";
import { toast } from "react-hot-toast";
import LazyLoad from "react-lazy-load";
import { addToDb, getBookMarkRecipes } from "../utilities/localStorage";
import { useEffect } from "react";

const ChefDetails = () => {
  const { name, image, bio, experience, likes, number_of_recipes, recipes } =
    useLoaderData();
  const [data, setData] = useState({});
  const [isBookMark, setIsBookMark] = useState(false);

  const [bookMark, setBookMark] = useState([]);

  useEffect(() => {
    const bookMark = getBookMarkRecipes();
    const recipe = [];
    for (const element in bookMark) {
      recipe.push(element);
    }
    setBookMark(recipe);
  }, []);

  useEffect(() => {
    const storeRecipres = getBookMarkRecipes();
    const saveRecipes = [];
    for (const id in storeRecipres) {
      const addedRecipes = recipes.find((e) => e.id === id);
      if (addedRecipes) {
        saveRecipes.push(addedRecipes);
      }
    }
    setBookMark(saveRecipes);
  }, [recipes]);

  const handleBookMark = (recipes) => {
    setBookMark([...bookMark, recipes]);
    addToDb(recipes.id);
  };

  console.log(bookMark);

  return (
    <div className="px-2 lg:px-72 my-10">
      <div className="grid lg:grid-cols-3 bg-base-100 rounded-md">
        <LazyLoad>
          <div className="col-span-1 h-96 p-5">
            <img
              src={image}
              alt="profile"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </LazyLoad>
        <div className="lg:col-span-2 p-5">
          <h1 className="text-4xl uppercase font-bold text-alabamaCrimson">
            {name}
          </h1>
          <p className="my-3">{bio}</p>
          <p className="my-3">
            <span className="text-alabamaCrimson me-2 font-bold">
              Experience:
            </span>
            {experience}
          </p>

          <div className="flex justify-between items-center">
            <p>
              <span className="text-alabamaCrimson me-2 font-bold">
                Number of Recipes:
              </span>
              {number_of_recipes} (Items)
            </p>
            <div className="flex justify-between text-3xl">
              <p className="text-alabamaCrimson">
                <FontAwesomeIcon icon={faThumbsUp} />
                {likes.length > 4 ? `${likes.slice(0, 2)}K` : likes}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="my-3 text-alabamaCrimson font-bold">My Recipes</h1>

        <div className="grid gap-5 lg:grid-cols-4">
          {recipes.map((e) => (
            <div
              key={e.id}
              className="col-span-1 bg-base-100 p-8 text-center rounded-md"
            >
              <img src={cooking} alt="cooking" className="w-24 mx-auto" />
              <h1 className="my-3 font-bold">{e.name}</h1>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-left text-xs">Rating ({e.rating})</p>
                  <Rating
                    style={{
                      maxWidth: 80,
                    }}
                    readOnly
                    value={e.rating}
                  />
                </div>

                <button
                  className={
                    isBookMark
                      ? "btn-disabled bg-transparent"
                      : "bg-transparent"
                  }
                  tabindex="-1"
                  role="button"
                  aria-disabled="true"
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      handleBookMark(e);
                      setIsBookMark(!isBookMark);
                      toast.success("Add to favorite");
                    }}
                    icon={isBookMark ? faHeart : regularHeart}
                    className="cursor-pointer text-alabamaCrimson text-xl"
                  />
                </button>
              </div>
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
