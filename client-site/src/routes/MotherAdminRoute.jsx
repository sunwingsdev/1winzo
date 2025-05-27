import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const MotherAdminRoute = ({ children }) => {
  const { token, user, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user || user?.role !== "mother-admin") {
      navigate("/admin");
    }
  }, [token, user, navigate]);
  if (loading) {
    return <div>loading...</div>;
  }

  if (!token || !user || user?.role !== "mother-admin") {
    return null;
  }
  return children;
};

export default MotherAdminRoute;
