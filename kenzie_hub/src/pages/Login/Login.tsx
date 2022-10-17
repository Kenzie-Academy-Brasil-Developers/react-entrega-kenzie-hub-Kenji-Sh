import { useContext } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container, Content, AnimationContainer } from "./Login.style";
import { Button } from "@components/Button";
import { UserContext } from "@contexts/UserContext";
import { iUserFormValue } from "@customTypes/form";
import { iUserContext } from "@customTypes/userContext";
import { loginFormSchema } from "@validations/login";
// @ts-ignore
import Logo from "@assets/Logo.svg";
import Input from "@components/Input";
import CircleLoader from "@components/CircleLoader";

const Login = () => {
  const { login, loading } = useContext<iUserContext>(UserContext);

  const {
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors, isValid: loginIsValid },
  } = useForm<iUserFormValue>({
    resolver: yupResolver(loginFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<iUserFormValue> = (data) => {
    login(data);
  };

  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        {loading ? (
          <div className="loading">
            <CircleLoader />
          </div>
        ) : (
          <AnimationContainer>
            <form onSubmit={loginHandleSubmit(onSubmit)}>
              <h1>Login</h1>
              <Input
                name="email"
                label="Email"
                placeholder="Digite seu email"
                type="email"
                register={loginRegister}
                error={loginErrors["email"]?.message}
              />
              <Input
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                register={loginRegister}
                error={loginErrors["password"]?.message}
              />
              <Button pinkSchema type="submit" disabled={!loginIsValid}>
                Entrar
              </Button>
            </form>
            <p>Ainda não possui uma conta?</p>
            <Link to="/signup">Cadastre-se</Link>
          </AnimationContainer>
        )}
      </Content>
    </Container>
  );
};

export default Login;
