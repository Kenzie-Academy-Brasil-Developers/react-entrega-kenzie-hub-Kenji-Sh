import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./Login.style";
import Input from "@components/Input";
import { Button } from "@components/Button";

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    const data = {
      email,
      password,
    };

    console.log(data);
  };

  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
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
            />
            <Input
              withBorder
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              register={register}
            />
            <Button pinkSchema>Entrar</Button>
          </form>
          <p>Ainda não possui uma conta?</p>
          <Button onClick={() => navigate("/signup")}>Cadastre-se</Button>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
