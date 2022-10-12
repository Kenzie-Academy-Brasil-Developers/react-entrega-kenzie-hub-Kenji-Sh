import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./SignUp.style";
import Input from "@components/Input";
import { Button } from "@components/Button";
import Select from "@components/Select";
import CircleLoader from "@components/CircleLoader";
import { UserContext } from "@contexts/UserContext";
import { signUpFormSchema } from "@validations/signUp";

const moduleOptions = [
  "Primeiro módulo (Introdução ao Frontend)",
  "Segundo módulo (Frontend Avançado)",
  "Terceiro módulo (Introdução ao Backend)",
  "Quarto módulo (Backend Avançado)",
];

const SignUp = () => {
  const { signUp, loading } = useContext(UserContext);
  const selectRef = useRef(moduleOptions[0]);

  const {
    register: signUpRegister,
    handleSubmit: signUpHandleSubmit,
    formState: { errors: signUpErrors, isValid: signUpIsValid },
  } = useForm({
    resolver: yupResolver(signUpFormSchema),
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

    signUp(data);
  };

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="logo" />
          <Link to={-1}>Voltar</Link>
        </div>
        {loading ? (
          <div className="loading">
            <CircleLoader />
          </div>
        ) : (
          <AnimationContainer>
            <form onSubmit={signUpHandleSubmit(onSubmit)}>
              <h1>Crie sua conta</h1>
              <p>Rápido e grátis, vamos nessa</p>
              <Input
                name="name"
                label="Nome"
                placeholder="Digite aqui seu nome"
                type="text"
                register={signUpRegister}
                error={signUpErrors["name"]?.message}
              />
              <Input
                name="email"
                label="Email"
                placeholder="Digite aqui seu email"
                type="email"
                register={signUpRegister}
                error={signUpErrors["email"]?.message}
              />
              <Input
                name="password"
                label="Senha"
                placeholder="Digite aqui sua senha"
                type="password"
                register={signUpRegister}
                error={signUpErrors["password"]?.message}
              />
              <Input
                name="passwordConfirm"
                label="Confirmar Senha"
                placeholder="Digite novamente sua senha"
                type="password"
                register={signUpRegister}
                error={signUpErrors["passwordConfirm"]?.message}
              />
              <Input
                name="bio"
                label="Bio"
                placeholder="Fale sobre você"
                type="text"
                register={signUpRegister}
                error={signUpErrors["bio"]?.message}
              />
              <Input
                name="contact"
                label="Contato"
                placeholder="Opção de contato"
                type="text"
                register={signUpRegister}
                error={signUpErrors["contact"]?.message}
              />
              <Select
                name="moduleSelect"
                label="Selecionar módulo"
                selectRef={selectRef}
                options={moduleOptions}
                register={signUpRegister}
              />
              <Button pinkSchema type="submit" disabled={!signUpIsValid}>
                Cadastrar
              </Button>
            </form>
          </AnimationContainer>
        )}
      </Content>
    </Container>
  );
};

export default SignUp;
