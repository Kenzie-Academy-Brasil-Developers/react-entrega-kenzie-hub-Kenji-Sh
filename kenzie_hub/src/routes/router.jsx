import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login";
import Register from "@pages/Register";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/dashboard" element={<Register />} />
    </Routes>
  );
};
