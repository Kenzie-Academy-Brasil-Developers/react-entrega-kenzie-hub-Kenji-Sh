import { Navigate, useNavigate } from "react-router-dom";

import Logo from "@assets/Logo.svg";
import { Container, Navbar, Header, Main } from "./Dashboard.style";
import { SmallButton } from "@components/Button";

const Dashboard = ({ authenticated, setAuthenticated, user, setUser }) => {
  if (!authenticated) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("@KenzieHub:token");
    localStorage.clear("@KenzieHub:userId");

    setAuthenticated(false);
    setUser(null)

    navigate(-1);
  };

  return (
    <Container>
      <Navbar>
        <img src={Logo} alt="logo" />
        <SmallButton onClick={handleLogout}>Sair</SmallButton>
      </Navbar>
      <Header>
        <h1>Olá {user["name"]}</h1>
        <p>{user["course_module"]}</p>
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
