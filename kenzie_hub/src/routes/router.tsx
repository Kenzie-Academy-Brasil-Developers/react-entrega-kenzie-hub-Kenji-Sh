import { Routes, Route } from "react-router-dom";

import ProtectedRoutes from "@components/ProtectedRoutes";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Dashboard from "@pages/Dashboard";

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
