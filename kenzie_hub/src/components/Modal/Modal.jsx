import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";

import { ModalContent } from "./Modal.style";
import Input from "@components/Input";
import Select from "@components/Select";
import { Button } from "@components/Button";
import CircleLoader from "@components/CircleLoader";
import { TechContext } from "@contexts/TechContext";
import { addTechFormSchema } from "@validations/addTech";
import { editTechFormSchema } from "@validations/editTech";

const status = ["Iniciante", "Intermediário", "Avançado"];

const Modal = () => {
  const { loading, type, tech, addTech, editTech, deleteTech, closeTechModal } =
    useContext(TechContext);
  const selectRef = useRef(type === "add" ? "Iniciante" : "");

  const {
    register: addTechRegister,
    handleSubmit: addTechHandleSubmit,
    formState: { errors: addTechErrors, isValid: addTechIsValid },
  } = useForm({
    resolver: yupResolver(addTechFormSchema),
    mode: "onChange",
  });

  const {
    register: editTechRegister,
    handleSubmit: editTechHandleSubmit,
    formState: { isDirty: editTechIsDirty },
  } = useForm({
    resolver: yupResolver(editTechFormSchema),
    mode: "onChange",
  });

  const onSubmitAddTech = ({ title }) => {
    const data = {
      title,
      status: selectRef.current,
    };

    addTech(data);
  };

  const onSubmitEditTech = () => {
    const data = {
      status: selectRef.current,
    };

    editTech(tech["id"], data);
  };

  return (
    <ModalContent>
      {type === "add" ? (
        <>
          <div className="modal-header">
            <h3>Cadastrar Tecnologia</h3>
            <AiOutlineClose onClick={closeTechModal} />
          </div>
          <form onSubmit={addTechHandleSubmit(onSubmitAddTech)}>
            {loading ? (
              <CircleLoader />
            ) : (
              <>
                <Input
                  name="title"
                  label="Nome"
                  placeholder="Digite o nome da tecnologia"
                  type="text"
                  register={addTechRegister}
                  error={addTechErrors["title"]?.message}
                />
                <Select
                  name="status"
                  label="Selecionar status"
                  selectRef={selectRef}
                  options={status}
                  register={addTechRegister}
                />
                <Button pinkSchema type="submit" disabled={!addTechIsValid}>
                  Cadastrar
                </Button>
              </>
            )}
          </form>
        </>
      ) : (
        <>
          <div className="modal-header">
            <h3>Detalhes da Tecnologia</h3>
            <AiOutlineClose onClick={closeTechModal} />
          </div>
          <form onSubmit={editTechHandleSubmit(onSubmitEditTech)}>
            {loading ? (
              <CircleLoader />
            ) : (
              <>
                <Input
                  name="title"
                  label="Nome da Tecnologia"
                  placeholder={tech["title"]}
                  type="text"
                  readOnly
                />
                <Select
                  name="status"
                  label="Status"
                  register={editTechRegister}
                  options={status}
                  placeholder={tech["status"]}
                  selectRef={selectRef}
                />
                <div className="button-container">
                  <Button pinkSchema type="submit" disabled={!editTechIsDirty}>
                    Salvar alterações
                  </Button>
                  <Button
                    onClick={() => {
                      deleteTech(tech["id"]);
                    }}
                  >
                    Excluir
                  </Button>
                </div>
              </>
            )}
          </form>
        </>
      )}
    </ModalContent>
  );
};

export default Modal;
