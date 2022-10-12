import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./Login.style";
import Input from "@components/Input";
import { Button } from "@components/Button";
import CircleLoader from "@components/CircleLoader";
import { UserContext } from "@contexts/UserContext";
import { loginFormSchema } from "@validations/login";

const Login = () => {
  const { login, loading } = useContext(UserContext);

  const {
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors, isValid: loginIsValid },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
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
