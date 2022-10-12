import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "@services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data) => {
    setLoading(true);

    try {
      const response = await api.post("/sessions", data);
      const { user, token } = response["data"];

      api.defaults.headers.authorization = `Bearer ${token}`;
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

      setAuthenticated(true);
      setUserInfo(user);
      setLoading(false);

      navigate("/dashboard", { replace: true });
    } catch (_) {
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
    }
  };

  const signUp = async (data) => {
    setLoading(true);

    try {
      await api.post("/users", data);

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

      setLoading(false);

      navigate("/");
    } catch (_) {
      setLoading(false);

      toast.error("Email já foi cadastrado", {
        style: {
          color: "var(--grey_0)",
          background: "var(--grey_2)",
        },
        iconTheme: {
          primary: "var(--negative)",
          secondary: "var(--grey_2)",
        },
      });
    }
  };

  const logout = () => {
    localStorage.clear("@KenzieHub:token");

    setAuthenticated(false);

    navigate(-1);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

      if (token) {
        setLoading(true);

        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setAuthenticated(true);
          setUserInfo(data);
          setLoading(false);

          navigate("/dashboard");
        } catch (_) {
          localStorage.clear("@KenzieHub:token");
          localStorage.clear("@KenzieHub:userId");

          setLoading(false);
        }
      }
    };

    loadUser();
  }, []);

  const value = {
    authenticated,
    setAuthenticated,
    userInfo,
    loading,
    login,
    signUp,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
