import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center">
        <Oval
          height={50}
          width={50}
          color="#FD9800"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#f2f2f2"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      </div>
    );
  } else if (user) {
    return children;
  } else {
    <Navigate to="/authentication" state={{ from: loading }} replace />;
  }
};

export default PrivateRouter;
