import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { iTech } from "@customTypes/api";
import { iTechFormValue } from "@customTypes/form";
import { iTechContext } from "@customTypes/techContext";
import api from "@services/api";
import useToast from "@hooks/useToast";

type iTechProviderProps = {
  children?: React.ReactNode;
};

export const TechContext = createContext({} as iTechContext);

const TechProvider = ({ children }: iTechProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState<string | null>(null);
  const [tech, setTech] = useState<iTech | null>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const addTech = async (formData: iTechFormValue) => {
    setLoading(true);

    try {
      await api.post("/users/techs", formData);

      useToast("success", "Tecnologia criada com sucesso!");

      navigate(0);
    } catch (_) {
      setLoading(false);

      useToast("error", "Tecnologia já cadastrada.");
    }
  };

  const editTech = async (formData: iTechFormValue, techId?: string) => {
    setLoading(true);

    try {
      await api.put(`/users/techs/${techId}`, formData);

      useToast("success", "Tecnologia atualizada com sucesso!");

      navigate(0);
    } catch (_) {
      setLoading(false);

      useToast("error", "Algo deu errado.");
    }
  };

  const deleteTech = async (techId?: string) => {
    setLoading(true);

    try {
      await api.delete(`/users/techs/${techId}`);

      useToast("success", "Tecnologia excluída com sucesso!");

      navigate(0);
    } catch (_) {
      setLoading(false);

      useToast("error", "Algo deu errado.");
    }
  };

  const openTechModal = (modalType: string, techDetail?: iTech | null) => {
    setType(modalType);
    setTech(techDetail);
    setIsOpen(true);
  };

  const closeTechModal = () => {
    setType(null);
    setTech(null);
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
