import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import UpdateProfileModal from "../utilities/updateProfileModal";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="px-2 lg:px-72 my-10">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="col-span-1 p-3">
          <div className="w-72 h-72 rounded-full overflow-hidden mx-auto">
            <img
              src={user && user.photoURL}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-2 p-3">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl text-alabamaCrimson font-bold">
              {user && user.displayName}
            </h1>
            <label htmlFor="my-modal-1">
              <FontAwesomeIcon
                icon={faEdit}
                className="cursor-pointer hover:text-alabamaCrimson"
              />
            </label>
          </div>
          <p className="my-3">Email: {user && user.email}</p>
          <p className="my-3">Since: {user && user.metadata.creationTime}</p>
        </div>
      </div>
      <UpdateProfileModal />
    </div>
  );
};

export default Profile;
