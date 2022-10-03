import { useNavigate } from "react-router-dom";

import Logo from "@assets/Logo.svg";
import { Container, Navbar, Header, Main } from "./Dashboard.style";
import { SmallButton } from "@components/Button";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar>
        <img src={Logo} alt="logo" />
        <SmallButton onClick={() => navigate(-1)}>Voltar</SmallButton>
      </Navbar>
      <Header>
        <h1>Olá Samuel Leão</h1>
        <p>Primeiro módulo (Introdução ao Frontend)</p>
      </Header>
      <Main>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Main>
    </Container>
  );
};

export default Dashboard;
