import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { Oval } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[75vh] grid place-items-center">
        <Oval
          height={30}
          width={30}
          color="#B1002A"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#ff3363"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      </div>
    );
  } else if (user) {
    return children;
  }
  return (
    <Navigate
      to="/authentication"
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
