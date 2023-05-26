import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const { name, image, bio, experience, likes, number_of_recipes, recipes } =
    useLoaderData();

  console.log(recipes);

  return (
    <div className="px-2 lg:px-72 my-10">
      <div>
        <div>
          <img src={image} alt="profile" />
        </div>
        <div>
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
