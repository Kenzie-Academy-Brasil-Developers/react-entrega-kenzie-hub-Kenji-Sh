import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "@pages/Login";
import Register from "@pages/Register";
import Dashboard from "@pages/Dashbord";

export default () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    token && setAuthenticated(true);
  }, [authenticated]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        }
      />
      <Route
        path="/signup"
        element={<Register authenticated={authenticated} />}
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        }
      />
    </Routes>
  );
};
