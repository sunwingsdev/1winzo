import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";

const FirstMagRoute = ({ children }) => {
  const { token, user, loading } = useSelector((state) => state.auth);
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery();
  const navigate = useNavigate();

  const masterAgents = users?.filter((u) => u.role === "master-agent") || [];
  const sortedMasterAgents = [...masterAgents].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
  const firstMag = sortedMasterAgents[0];

  useEffect(() => {
    if (loading || isUsersLoading) return;
    if (!token || !user || user?.role !== "master-agent") {
      navigate("/ag");
      return;
    }
    if (masterAgents.length === 0) {
      return;
    }
    if (user._id !== firstMag?._id) {
      navigate("/ag");
    }
  }, [
    token,
    user,
    loading,
    isUsersLoading,
    firstMag,
    navigate,
    masterAgents.length,
  ]);

  if (loading || isUsersLoading) {
    return <div>Loading...</div>;
  }
  if (!token || !user || user?.role !== "master-agent") {
    return null;
  }
  if (masterAgents.length === 0) {
    return children;
  }
  if (user._id === firstMag?._id) {
    return children;
  }

  return null;
};

export default FirstMagRoute;
