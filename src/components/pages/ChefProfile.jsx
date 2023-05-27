import { useContext } from "react";
import { ChefContext } from "../../provider/ChefDataProvider";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ChefCard from "./ChefCard";

const ChefProfile = () => {
  const { chef } = useContext(ChefContext);

  return (
    <div className="px-2 lg:px-72 my-32">
      <h1 className="text-4xl font-bold uppercase text-center mb-10">
        Our Best <span className="text-alabamaCrimson">Chef</span>
      </h1>
      {chef.length > 0 ? (
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
          {chef?.slice(0, 3).map((e) => (
            <ChefCard key={e.id} chefInfo={e} />
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
      <p className="text-right my-5 text-alabamaCrimson hover:underline font-bold">
        <Link to="/allchef">See more</Link>
      </p>
    </div>
  );
};

export default ChefProfile;
