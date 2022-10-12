import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "@services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(null);
  const [tech, setTech] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const addTech = async (data) => {
    setLoading(true);

    try {
      await api.post("/users/techs", data);

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
    } catch (_) {
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
    }
  };

  const editTech = async (techId, data) => {
    setLoading(true);

    try {
      await api.put(`/users/techs/${techId}`, data);

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
    } catch (_) {
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
    }
  };

  const deleteTech = async (techId) => {
    setLoading(true);

    try {
      await api.delete(`/users/techs/${techId}`);

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
    } catch (_) {
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
    }
  };

  const openTechModal = (modalType, techDetail = {}) => {
    setType(modalType);
    setTech(techDetail);
    setIsOpen(true);
  };

  const closeTechModal = () => {
    setIsOpen(false);
  };

  const value = {
    loading,
    type,
    tech,
    isOpen,
    addTech,
    editTech,
    deleteTech,
    openTechModal,
    closeTechModal,
  };

  return <TechContext.Provider value={value}>{children}</TechContext.Provider>;
};

export default TechProvider;
