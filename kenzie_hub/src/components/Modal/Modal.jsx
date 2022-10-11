import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";

import { ModalContent } from "./Modal.style";
import Input from "@components/Input";
import Select from "@components/Select";
import { Button } from "@components/Button";
import CircleLoader from "@components/CircleLoader";
import { TechContext } from "@contexts/TechContext";

const status = ["Iniciante", "Intermediário", "Avançado"];

const Modal = ({ setIsOpen, type, tech }) => {
  const { addTech, editTech, deleteTech, loading } = useContext(TechContext);

  const selectRef = useRef(type === "add" ? "Iniciante" : "");

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const formSchemaEdit = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    formState: { errors: errorsEdit, isDirty },
  } = useForm({
    resolver: yupResolver(formSchemaEdit),
    mode: "onChange",
  });

  const onSubmitAddTech = ({ title }) => {
    const data = {
      title,
      status: selectRef.current,
    };

    addTech(data);
  };

  const onSubmitEditTech = ({ title }) => {
    const data = {
      ...(title && { title }),
      ...(selectRef.current && { status: selectRef.current }),
    };

    console.log(data);

    editTech(tech["id"], data);
  };

  return (
    <ModalContent>
      {type === "add" ? (
        <>
          <div className="modal-header">
            <h3>Cadastrar Tecnologia</h3>
            <AiOutlineClose onClick={() => setIsOpen(false)} />
          </div>
          <form onSubmit={handleSubmit(onSubmitAddTech)}>
            {loading ? (
              <CircleLoader />
            ) : (
              <>
                <Input
                  name="title"
                  label="Nome"
                  placeholder="Digite o nome da tecnologia"
                  type="text"
                  register={register}
                  error={errors["title"]?.message}
                />
                <Select
                  name="status"
                  label="Selecionar status"
                  register={register}
                  options={status}
                  selectRef={selectRef}
                />
                <Button pinkSchema type="submit" disabled={!isValid}>
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
            <AiOutlineClose onClick={() => setIsOpen(false)} />
          </div>
          <form onSubmit={handleSubmitEdit(onSubmitEditTech)}>
            {loading ? (
              <CircleLoader />
            ) : (
              <>
                <Input
                  name="title"
                  label="Nome da Tecnologia"
                  placeholder={tech["title"]}
                  type="text"
                  register={registerEdit}
                  error={errorsEdit["title"]?.message}
                  readOnly
                />
                <Select
                  name="status"
                  label="Status"
                  register={registerEdit}
                  options={status}
                  placeholder={tech["status"]}
                  selectRef={selectRef}
                />
                <div className="button-container">
                  <Button pinkSchema type="submit" disabled={!isDirty}>
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
