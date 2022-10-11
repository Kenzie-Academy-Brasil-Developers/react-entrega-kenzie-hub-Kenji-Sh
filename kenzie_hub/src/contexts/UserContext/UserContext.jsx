import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "@services/api";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = (data) => {
    setLoading(true);

    api
      .post("/sessions", data)
      .then((response) => {
        const { user, token } = response["data"];

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:userId", JSON.stringify(user["id"]));

        setAuthenticated(true);
        setUserInfo(user);
        setLoading(false);

        navigate("/dashboard");
      })
      .catch((_) => {
        setLoading(false);

        toast.error("Email ou senha inválidos.", {
          style: {
            color: "var(--grey_0)",
            background: "var(--grey_2)",
          },
          iconTheme: {
            primary: "var(--negative)",
            secondary: "var(--grey_2)",
          },
        });
      });
  };

  const signup = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Conta criada com sucesso", {
          style: {
            color: "var(--grey_0)",
            background: "var(--grey_2)",
          },
          iconTheme: {
            primary: "var(--success)",
            secondary: "var(--grey_2)",
          },
        });

        navigate("/");
      })
      .catch((_) =>
        toast.error("Email já foi cadastrado", {
          style: {
            color: "var(--grey_0)",
            background: "var(--grey_2)",
          },
          iconTheme: {
            primary: "var(--negative)",
            secondary: "var(--grey_2)",
          },
        })
      );
  };

  const logout = () => {
    localStorage.clear("@KenzieHub:token");
    localStorage.clear("@KenzieHub:userId");

    setAuthenticated(false);

    navigate(-1);
  };

  useEffect(() => {
    setLoading(true);

    const token = JSON.parse(localStorage.getItem("@KenzieHub:token")) || "";

    api.defaults.headers.authorization = `Bearer ${token}`;

    api
      .get("/profile")
      .then((response) => {
        setUserInfo(response["data"]);
        setLoading(false);
      })
      .catch((_) => {
        localStorage.clear("@KenzieHub:token");
        localStorage.clear("@KenzieHub:userId");
        setLoading(false);
      });

    token && setAuthenticated(true);
  }, []);

  const value = {
    authenticated,
    setAuthenticated,
    loading,
    login,
    signup,
    logout,
    userInfo,
  };

  console.log(userInfo)

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
