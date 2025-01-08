import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

function ProtectedRoute({ setIsOpenLogin, children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log(isAuthenticated);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/");
  //     if (setIsOpenLogin) {
  //       setIsOpenLogin(true); // Optional: Opens login modal if provided
  //     }
  //   }
  // }, [isAuthenticated, navigate, setIsOpenLogin]);

  // Render children if authenticated; otherwise, null (navigation already handled)
  // return isAuthenticated ? children : null;
  return children;
}

export default ProtectedRoute;
