import { useEffect, useState } from "react";
import { getBookMarkRecipes } from "../components/utilities/localStorage";
import { useContext } from "react";
import { ChefContext } from "../provider/ChefDataProvider";

const useBookMark = () => {
  const { chef } = useContext(ChefContext);
  const [bookMark, setBookMark] = useState([]);
  useEffect(() => {
    const storeRecipres = getBookMarkRecipes();
    const allRecipes = [];
    const saveRecipes = [];

    for (const recipe of chef) {
      for (const elements of recipe.recipes) {
        allRecipes.push(elements);
      }
    }

    for (const id in storeRecipres) {
      const addedRecipes = allRecipes.find((e) => e.id === id);
      if (addedRecipes) {
        saveRecipes.push(addedRecipes);
      }
    }
    setBookMark(saveRecipes);
  }, [chef]);
  return [bookMark, setBookMark];
};

export default useBookMark;
