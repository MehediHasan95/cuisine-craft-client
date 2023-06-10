import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Cuisine Craft - ${title}`;
  }, [title]);
};

export default useTitle;
