import { useContext } from "react";
import { ChefContext } from "../../provider/ChefDataProvider";
import ChefCard from "./ChefCard";

const AllChef = () => {
  const { chef } = useContext(ChefContext);
  return (
    <div className="px-2 lg:px-72 my-10">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
        {chef?.map((e) => (
          <ChefCard key={e.id} chefInfo={e} />
        ))}
      </div>
    </div>
  );
};

export default AllChef;
