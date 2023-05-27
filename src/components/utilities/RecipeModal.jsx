import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";

const RecipeModal = ({ data }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-7xl relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-error btn-circle absolute right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} className="text-white" />
          </label>
          <h3 className="text-center text-lg font-bold">
            How do you make{" "}
            <span className="text-alabamaCrimson">{data.name}</span>
          </h3>
          <div className="text-left">
            <h1 className="text-alabamaCrimson">Method:</h1>
            <pre>
              <code className="font-roboto whitespace-pre-wrap break-words">
                {data.method}
              </code>
            </pre>
            <h1 className="text-alabamaCrimson mt-5">Ingredients:</h1>
            <ul>
              {data.ingredients?.map((e, id) => (
                <li key={id}>
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
