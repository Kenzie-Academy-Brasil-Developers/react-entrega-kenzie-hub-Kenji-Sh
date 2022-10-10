import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";

import { Container, ModalContent } from "./Modal.style";
import Input from "@components/Input";
import Select from "@components/Select";
import { Button } from "@components/Button";

const professionalLevel = ["Iniciante", "Intermediário", "Avançado"];

const Modal = ({ setIsOpen }) => {
  const formSchema = yup.object().shape({
    techName: yup
      .string()
      .required("Campo obrigatório"),
    professionalLevel: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  return (
    <Container>
      <ModalContent>
        <div>
          <h3>Cadastrar Tecnologia</h3>
          <AiOutlineClose onClick={() => setIsOpen(false)} />
        </div>
        <form>
          <Input
            name="techName"
            label="Nome"
            placeholder="Digite o nome da tecnologia"
            type="text"
            register={register}
            error={errors["techName"]?.message}
          />
          <Select
            name="professionalLevel"
            label="Selecionar status"
            register={register}
            options={professionalLevel}
            initialValue="Iniciante"
          />
          <Button pinkSchema type="submit" disabled={!isValid}>
            Cadastrar
          </Button>
        </form>
      </ModalContent>
    </Container>
  );
};

export default Modal;
