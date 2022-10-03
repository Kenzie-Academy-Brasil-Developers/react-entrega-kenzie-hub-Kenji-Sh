import { useNavigate } from "react-router-dom";

import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./Login.style";
import Input from "@components/Input";
import { Button } from "@components/Button";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <AnimationContainer>
          <form>
            <h1>Login</h1>
            <Input
              name="email"
              label="Email"
              placeholder="Digite seu email"
              type="email"
            />
            <Input
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
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
