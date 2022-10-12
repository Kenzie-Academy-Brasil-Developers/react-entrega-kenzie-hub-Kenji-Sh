import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "@contexts/UserContext";

const ProtectedRoutes = () => {
  const { authenticated } = useContext(UserContext);

  return authenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
