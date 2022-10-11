import { createContext, useState } from "react";

import api from "@services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext(null);

const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addTech = (data) => {
    setLoading(true);

    api
      .post("/users/techs", data)
      .then((_) => {
        toast.success("Tecnologia criada com sucesso!", {
          style: {
            color: "var(--grey_0)",
            background: "var(--grey_2)",
          },
          iconTheme: {
            primary: "var(--success)",
            secondary: "var(--grey_2)",
          },
        });

        navigate(0);
      })
      .catch((_) => {
        setLoading(false);

        toast.error("Tecnologia já cadastrada.", {
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

  const editTech = (techId, data) => {
    setLoading(true);

    api
      .put(`/users/techs/${techId}`, data)
      .then((_) => {
        toast.success("Tecnologia atualizada com sucesso!", {
          style: {
            color: "var(--grey_0)",
            background: "var(--grey_2)",
          },
          iconTheme: {
            primary: "var(--success)",
            secondary: "var(--grey_2)",
          },
        });

        navigate(0);
      })
      .catch((_) => {
        setLoading(false);

        toast.error("Algo deu errado.", {
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

  const deleteTech = (techId) => {
    setLoading(true);

    api.delete(`/users/techs/${techId}`).then((_) => {
      toast.success("Tecnologia excluída com sucesso", {
        style: {
          color: "var(--grey_0)",
          background: "var(--grey_2)",
        },
        iconTheme: {
          primary: "var(--success)",
          secondary: "var(--grey_2)",
        },
      });

      navigate(0);
    });
  };

  const value = {
    addTech,
    editTech,
    deleteTech,
    loading,
  };

  return <TechContext.Provider value={value}>{children}</TechContext.Provider>;
};

export default TechProvider;
