import { createContext } from "react";

import api from "@services/api";

export const TechContext = createContext(null);

const TechProvider = ({ children }) => {

  const addTech = (data) => {
    console.log(data)
    // api
    //   .post("/users/techs", data)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  };

  const value = {
    addTech,
  };

  return <TechContext.Provider value={value}>{children}</TechContext.Provider>;
};

export default TechProvider;
