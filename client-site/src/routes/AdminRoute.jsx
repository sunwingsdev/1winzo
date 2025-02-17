import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user || user?.role !== "admin") {
      navigate("/admin");
    }
  }, [token, user, navigate]);

  if (!token || !user || user?.role !== "admin") {
    return null;
  }
  return children;
};

export default AdminRoute;
