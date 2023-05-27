import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ChefContext = createContext(null);
const ChefDataProvider = ({ children }) => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-mehedi-hasan-mehedihasan95.vercel.app/v1/chefrecipes"
    )
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);

  const dest = { chef };
  return <ChefContext.Provider value={dest}>{children}</ChefContext.Provider>;
};

export default ChefDataProvider;
