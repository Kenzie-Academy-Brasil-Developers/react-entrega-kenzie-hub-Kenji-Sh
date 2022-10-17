import { useContext, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";

import { ModalContent } from "./Modal.style";
import { Button } from "@components/Button";
import { TechContext } from "@contexts/TechContext";
import { iTechFormValue } from "@customTypes/form";
import { iTechContext } from "@customTypes/techContext";
import { addTechFormSchema } from "@validations/addTech";
import { editTechFormSchema } from "@validations/editTech";
import Input from "@components/Input";
import Select from "@components/Select";
import CircleLoader from "@components/CircleLoader";

const status: string[] = ["Iniciante", "Intermediário", "Avançado"];

const Modal = () => {
  const { loading, type, tech, addTech, editTech, deleteTech, closeTechModal } =
    useContext<iTechContext>(TechContext);
  const selectRef = useRef<string>(type === "add" ? "Iniciante" : "");

  const {
    register: addTechRegister,
    handleSubmit: addTechHandleSubmit,
    formState: { errors: addTechErrors, isValid: addTechIsValid },
  } = useForm<iTechFormValue>({
    resolver: yupResolver(addTechFormSchema),
    mode: "onChange",
  });

  const {
    register: editTechRegister,
    handleSubmit: editTechHandleSubmit,
    formState: { isDirty: editTechIsDirty },
  } = useForm<iTechFormValue>({
    resolver: yupResolver(editTechFormSchema),
    mode: "onChange",
  });

  const onSubmitAddTech: SubmitHandler<iTechFormValue> = (data) => {
    addTech(data);
  };

  const onSubmitEditTech = () => {
    const data: iTechFormValue = {
      status: selectRef["current"],
    };

    editTech(data, tech?.id);
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
                  placeholder={tech?.title}
                  type="text"
                  readOnly
                />
                <Select
                  name="status"
                  label="Status"
                  register={editTechRegister}
                  options={status}
                  placeholder={tech?.title}
                  selectRef={selectRef}
                />
                <div className="button-container">
                  <Button pinkSchema type="submit" disabled={!editTechIsDirty}>
                    Salvar alterações
                  </Button>
                  <Button
                    onClick={() => {
                      deleteTech(tech?.title);
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
