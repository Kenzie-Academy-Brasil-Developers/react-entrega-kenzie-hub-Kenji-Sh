import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Dashboard from "@pages/Dashbord";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
