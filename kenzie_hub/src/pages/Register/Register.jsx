import { useNavigate } from "react-router-dom";

import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./Register.style";
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
            <h1>Registrar</h1>
            <Input
              name="nome"
              label="Nome"
              placeholder="Digite aqui seu nome"
              type="text"
            />
            <Input
              name="email"
              label="Email"
              placeholder="Digite aqui seu email"
              type="email"
            />
            <Input
              name="password"
              label="Senha"
              placeholder="Digite aqui sua senha"
              type="password"
            />
            <Input
              name="passwordConfirm"
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              type="password"
            />
            <Input
              name="bio"
              label="Bio"
              placeholder="Fale sobre você"
              type="text"
            />
            <Input
              name="contact"
              label="Contato"
              placeholder="Opção de contato"
              type="text"
            />
            <Input
              name="password"
              label="Selecionar módulo"
              placeholder="Digite sua senha"
              type="password"
            />
            <Button pinkSchema>Cadastrar</Button>
          </form>
          <p>Ainda não possui uma conta?</p>
          <Button onClick={() => navigate("/")}>Cadastre-se</Button>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
