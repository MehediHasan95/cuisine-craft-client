import useBookMark from "../../hooks/useBookMark";
import cooking from "../../assets/cooking.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@smastrom/react-rating";
import { removeFromDb } from "../utilities/localStorage";

const BookMarkRecipes = () => {
  const [bookMark, setBookMark] = useBookMark();

  const handleRemoveItem = (id) => {
    setBookMark(bookMark.filter((e) => e.id !== id));
    removeFromDb(id);
  };

  return (
    <div className="px-2 lg:px-72 my-10">
      {bookMark.length > 0 ? (
        <>
          {bookMark.map((e) => (
            <div
              key={e.id}
              className="flex gap-3 bg-base-100 rounded-md p-3 mb-3 w-3/5 mx-auto"
            >
              <div className="w-20 h-20 overflow-hidden rounded-md">
                <img
                  src={cooking}
                  alt="recipes"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex w-full justify-between items-center">
                <div>
                  <h1 className="text-2xl text-alabamaCrimson">{e.name}</h1>
                  <div>
                    Rating: {e.rating}
                    <Rating
                      style={{
                        maxWidth: 80,
                      }}
                      readOnly
                      value={e.rating}
                    />
                  </div>
                </div>
                <FontAwesomeIcon
                  onClick={() => handleRemoveItem(e.id)}
                  icon={faTrashAlt}
                  className="text-3xl hover:text-alabamaCrimson cursor-pointer me-5"
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center">No favorite recipes added</p>
      )}
    </div>
  );
};

export default BookMarkRecipes;
