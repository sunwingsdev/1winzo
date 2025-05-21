import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const AffliateRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !token ||
      !user ||
      !user?.role ||
      user?.role === "user" ||
      user?.role === "mother-admin"
    ) {
      navigate("/affiliate/login");
    }
  }, [token, user, navigate]);

  return token && (user?.role !== "user" || user?.role !== "mother-admin")
    ? children
    : null;
};

export default AffliateRoute;
