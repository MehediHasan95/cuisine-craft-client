import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const UpdateProfileModal = () => {
  const { user, updateUserProfile, updateUserEmail } = useContext(AuthContext);
  const [update, setUpdate] = useState({});

  useEffect(() => {
    if (user) {
      setUpdate(user);
    }
  }, [user]);

  const handleEditDisplayName = (e) => {
    const { displayName, ...rest } = user;
    setUpdate({ displayName: e, ...rest });
  };

  const handleEditEmail = (e) => {
    const { email, ...rest } = user;
    setUpdate({ email: e, ...rest });
  };
  const handleEditPhotoURL = (e) => {
    const { photoURL, ...rest } = user;
    setUpdate({ photoURL: e, ...rest });
  };

  const handleUpdateComplete = (e) => {
    e.preventDefault();
    updateUserProfile(update.displayName, update.photoURL)
      .then(() => {
        toast.success("Update done");
      })
      .catch((error) => console.log(error));

    updateUserEmail(update.email)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-1"
            className="btn btn-sm btn-error btn-circle absolute right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} className="text-white" />
          </label>
          <h3 className="text-lg font-bold">Please update your profile</h3>
          <div className="py-4">
            <form onSubmit={handleUpdateComplete}>
              <input
                onChange={(e) => handleEditDisplayName(e.target.value)}
                type="text"
                value={update?.displayName}
                className="w-full bg-base-300 p-3 mb-2 border-none outline-none rounded-md"
                placeholder="Name"
              />
              <input
                onChange={(e) => handleEditEmail(e.target.value)}
                type="email"
                value={update?.email}
                className="w-full bg-base-300 p-3 mb-2 border-none outline-none rounded-md"
                placeholder="Email"
              />
              <input
                onChange={(e) => handleEditPhotoURL(e.target.value)}
                type="text"
                value={update?.photoURL}
                className="w-full bg-base-300 p-3 mb-2 border-none outline-none rounded-md"
                placeholder="PhotoURL"
              />
              <button className="w-full uppercase p-3 bg-alabamaCrimson text-white border-none outline-none rounded-md">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
