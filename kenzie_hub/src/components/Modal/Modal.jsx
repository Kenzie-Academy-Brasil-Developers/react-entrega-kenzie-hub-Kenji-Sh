import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";

import { ModalContent } from "./Modal.style";
import Input from "@components/Input";
import Select from "@components/Select";
import { Button } from "@components/Button";
import { TechContext } from "@contexts/TechContext";

const status = ["Iniciante", "Intermediário", "Avançado"];

const Modal = ({ setIsOpen, type, tech }) => {
  const { addTech } = useContext(TechContext);
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    addTech(data)
  }

  return (
    <ModalContent>
      {type === "add" ? (
        <>
          <div>
            <h3>Cadastrar Tecnologia</h3>
            <AiOutlineClose onClick={() => setIsOpen(false)} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              initialValue="Iniciante"
            />
            <Button pinkSchema type="submit" disabled={!isValid}>
              Cadastrar
            </Button>
          </form>
        </>
      ) : (
        <>
          <div>
            <h3>Detalhes da Tecnologia</h3>
            <AiOutlineClose onClick={() => setIsOpen(false)} />
          </div>
          <form onSubmit={handleSubmit(addTech)}>
            <Input
              name="title"
              label="Nome da Tecnologia"
              placeholder={tech["title"]}
              type="text"
              register={register}
              error={errors["title"]?.message}
            />
            <Select
              name="status"
              label="Status"
              register={register}
              options={status}
              initialValue={tech["status"]}
            />
            <div>
              <Button pinkSchema type="submit" disabled={!isValid}>
                Cadastrar
              </Button>
              <Button pinkSchema type="submit" disabled={!isValid}>
                Cadastrar
              </Button>
            </div>
          </form>
        </>
      )}
    </ModalContent>
  );
};

export default Modal;
