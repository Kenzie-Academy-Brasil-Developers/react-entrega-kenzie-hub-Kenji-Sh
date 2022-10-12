import { Routes, Route } from "react-router-dom";

import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Dashboard from "@pages/Dashbord";
import ProtectedRoutes from "@components/ProtectedRoutes";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
