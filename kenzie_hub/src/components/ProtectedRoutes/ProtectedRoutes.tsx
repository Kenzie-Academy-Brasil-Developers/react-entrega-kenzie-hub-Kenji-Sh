import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "@contexts/UserContext";
import { iUserContext } from "@customTypes/userContext";

const ProtectedRoutes = () => {
  const { authenticated } = useContext<iUserContext>(UserContext);

  return authenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
