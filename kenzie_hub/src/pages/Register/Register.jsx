import { useContext, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./Register.style";
import Input from "@components/Input";
import { Button, SmallButton } from "@components/Button";
import Select from "@components/Select";
import { UserContext } from "@contexts/UserContext";

const moduleSelect = [
  "Primeiro módulo (Introdução ao Frontend)",
  "Segundo módulo (Frontend Avançado)",
  "Terceiro módulo (Introdução ao Backend)",
  "Quarto módulo (Backend Avançado)",
];

const Register = () => {
  const { authenticated, signup } = useContext(UserContext);

  const selectRef = useRef("Primeiro módulo (Introdução ao Frontend)");

  if (authenticated) {
    return <Navigate to="/dashboard" />;
  }

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "A senha deve conter letras, números e ao menos um símbolo"
      ),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    moduleSelect: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = ({ name, email, password, bio, contact }) => {
    const data = {
      name,
      email,
      password,
      bio,
      contact,
      course_module: selectRef.current,
    };

    signup(data);
  };

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="logo" />
          <SmallButton onClick={() => navigate(-1)}>Voltar</SmallButton>
        </div>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Crie sua conta</h1>
            <p>Rápido e grátis, vamos nessa</p>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
              type="text"
              register={register}
              error={errors["name"]?.message}
            />
            <Input
              name="email"
              label="Email"
              placeholder="Digite aqui seu email"
              type="email"
              register={register}
              error={errors["email"]?.message}
            />
            <Input
              name="password"
              label="Senha"
              placeholder="Digite aqui sua senha"
              type="password"
              register={register}
              error={errors["password"]?.message}
            />
            <Input
              name="passwordConfirm"
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              type="password"
              register={register}
              error={errors["passwordConfirm"]?.message}
            />
            <Input
              name="bio"
              label="Bio"
              placeholder="Fale sobre você"
              type="text"
              register={register}
              error={errors["bio"]?.message}
            />
            <Input
              name="contact"
              label="Contato"
              placeholder="Opção de contato"
              type="text"
              register={register}
              error={errors["contact"]?.message}
            />
            <Select
              name="moduleSelect"
              label="Selecionar módulo"
              register={register}
              options={moduleSelect}
              selectRef={selectRef}
            />
            <Button pinkSchema type="submit" disabled={!isValid}>
              Cadastrar
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Register;
