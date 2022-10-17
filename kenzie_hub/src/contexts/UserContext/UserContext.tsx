import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  iUser,
  iLoginResponse,
  iGetUserResponse,
  iTech,
} from "@customTypes/api";
import { iUserFormValue } from "@customTypes/form";
import { iUserContext } from "@customTypes/userContext";
import api from "@services/api";
import useToast from "@hooks/useToast";

type iUserProviderProps = {
  children?: React.ReactNode;
};

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<iUser | null>(null);
  const [techList, setTechList] = useState<iTech[]>([]);
  const navigate = useNavigate();

  const login = async (formData: iUserFormValue) => {
    setLoading(true);

    try {
      const { data }: iLoginResponse = await api.post("/sessions", formData);
      const { user, token } = data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

      setAuthenticated(true);
      setUserInfo(user);
      setTechList(user["techs"]);

      navigate("/dashboard", { replace: true });
      setLoading(false);
    } catch (_) {
      setLoading(false);

      useToast("error", "Email ou senha inválidos.");
    }
  };

  const signUp = async (formData: iUserFormValue) => {
    setLoading(true);

    try {
      await api.post("/users", formData);

      useToast("success", "Conta criada com sucesso");

      navigate("/");
      setLoading(false);
    } catch (_) {
      setLoading(false);

      useToast("error", "Email já foi cadastrado");
    }
  };

  const logout = () => {
    localStorage.removeItem("@KenzieHub:token");

    setAuthenticated(false);
    setUserInfo(null);

    navigate(-1);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token: string = JSON.parse(
        localStorage.getItem("@KenzieHub:token")!
      );

      if (token) {
        setLoading(true);

        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data }: iGetUserResponse = await api.get("/profile");

          setAuthenticated(true);
          setLoading(false);
          setUserInfo(data);
          setTechList(data["techs"]);

          navigate("/dashboard");
        } catch (_) {
          localStorage.removeItem("@KenzieHub:token");
          localStorage.removeItem("@KenzieHub:userId");

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
    techList,
    setTechList,
    loading,
    login,
    signUp,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
