import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate } from "react-router-dom";

import Logo from "@assets/Logo.svg";
import TechList from "./TechList";
import {
  Container,
  ContentContainer,
  Navbar,
  Header,
  Main,
} from "./Dashboard.style";
import { SmallButton } from "@components/Button";
import CircleLoader from "@components/CircleLoader";
import { UserContext } from "@contexts/UserContext";

const Dashboard = () => {
  const { authenticated, logout, userInfo, loading } = useContext(UserContext);

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      {loading ? (
        <CircleLoader />
      ) : (
        <>
          <Navbar>
            <ContentContainer>
              <img src={Logo} alt="logo" />
              <SmallButton onClick={logout}>Sair</SmallButton>
            </ContentContainer>
          </Navbar>
          <Header>
            <ContentContainer>
              <h1>Olá, {userInfo?.name}</h1>
              <p>{userInfo?.course_module}</p>
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
        </>
      )}
    </Container>
  );
};

export default Dashboard;
