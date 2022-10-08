import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Logo from "@assets/Logo.svg";
import {
  Container,
  ContentContainer,
  Navbar,
  Header,
  Main,
} from "./Dashboard.style";
import { SmallButton } from "@components/Button";
import { AuthContext } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("@KenzieHub:user"));

  const handleLogout = () => {
    localStorage.clear("@KenzieHub:token");
    localStorage.clear("@KenzieHub:userId");
    sessionStorage.clear("@KenzieHub:user");

    setAuthenticated(false);

    navigate(-1);
  };

  return (
    <Container>
      <Navbar>
        <ContentContainer>
          <img src={Logo} alt="logo" />
          <SmallButton onClick={handleLogout}>Sair</SmallButton>
        </ContentContainer>
      </Navbar>
      <Header>
        <ContentContainer>
          <h1>Olá, {user["name"]}</h1>
          <p>{user["course_module"]}</p>
        </ContentContainer>
      </Header>
      <Main>
        <ContentContainer>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos
            novidades!!!
          </p>
        </ContentContainer>
      </Main>
    </Container>
  );
};

export default Dashboard;
