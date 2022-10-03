import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
