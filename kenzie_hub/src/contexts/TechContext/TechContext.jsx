import { createContext } from "react";

import api from "@services/api";

export const TechContext = createContext(null);

const TechProvider = ({ children }) => {
  const addTech = (data) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    api.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return <TechContext.Provider>{children}</TechContext.Provider>;
};
