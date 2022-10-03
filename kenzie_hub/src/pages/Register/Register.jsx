import { useNavigate } from "react-router-dom";

import Logo from "@assets/Logo.svg";
import { Container, Content, AnimationContainer } from "./Register.style";
import Input from "@components/Input";
import { Button, SmallButton } from "@components/Button";
import Select from "@components/Select";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="logo" />
          <SmallButton onClick={() => navigate(-1)}>Voltar</SmallButton>
        </div>
        <AnimationContainer>
          <form>
            <h1>Crie sua conta</h1>
            <p>Rápido e grátis, vamos nessa</p>
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
            <Select name="moduleSelect" label="Selecionar módulo" />
            <Button pinkSchema>Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
