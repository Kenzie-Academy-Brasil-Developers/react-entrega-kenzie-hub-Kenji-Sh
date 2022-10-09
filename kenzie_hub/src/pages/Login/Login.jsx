import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./Login.style";
import Input from "@components/Input";
import { Button } from "@components/Button";
import CircleLoader from "@components/CircleLoader";
import { UserContext } from "@contexts/UserContext";

const Login = () => {
  const { authenticated, login, loading } = useContext(UserContext);

  if (authenticated) {
    return <Navigate to="/dashboard" />;
  }

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
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
      <Content>
        <img src={Logo} alt="logo" />
        {loading ? (
          <div>
            <CircleLoader />
          </div>
        ) : (
          <AnimationContainer>
            <form onSubmit={handleSubmit(login)}>
              <h1>Login</h1>
              <Input
                withBorder
                name="email"
                label="Email"
                placeholder="Digite seu email"
                type="email"
                register={register}
                error={errors["email"]?.message}
              />
              <Input
                withBorder
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                register={register}
                error={errors["password"]?.message}
              />
              <Button pinkSchema disabled={!isValid}>
                Entrar
              </Button>
            </form>
            <p>Ainda não possui uma conta?</p>
            <Button onClick={() => navigate("/signup")}>Cadastre-se</Button>
          </AnimationContainer>
        )}
      </Content>
    </Container>
  );
};

export default Login;
