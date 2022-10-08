import { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import api from "@services/api";
import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./Login.style";
import Input from "@components/Input";
import { Button } from "@components/Button";
import CircleLoader from "@components/CircleFolder/CircleLoader";
import { AuthContext } from "@contexts/AuthContext";

const Login = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  if (authenticated) {
    return <Navigate to="/dashboard" />;
  }

  const [loading, setLoading] = useState(false);

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

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoading(true);

    api
      .post("/sessions", data)
      .then((response) => {
        const { user, token } = response["data"];

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:userId", JSON.stringify(user["id"]));
        sessionStorage.setItem("@KenzieHub:user", JSON.stringify(user));

        setAuthenticated(true);
        setLoading(false);

        navigate("/dashboard");
      })
      .catch((_) => {
        setLoading(false);

        toast.error("Email ou senha inválidos.", {
          style: {
            color: "var(--grey_0)",
            background: "var(--grey_2)",
          },
          iconTheme: {
            primary: "var(--negative)",
            secondary: "var(--grey_2)",
          },
        });
      });
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
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
