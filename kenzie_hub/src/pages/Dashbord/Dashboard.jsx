import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import Logo from "@assets/Logo.svg";
import {
  Container,
  ContentContainer,
  Navbar,
  Header,
  Main,
  ModalContainer,
} from "./Dashboard.style";
import TechList from "./TechList";
import { SmallButton } from "@components/Button";
import CircleLoader from "@components/CircleLoader";
import { UserContext } from "@contexts/UserContext";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const { authenticated, logout, userInfo, loading } = useContext(UserContext);

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(null);
  const [tech, setTech] = useState({});

  return (
    <Container>
      {loading ? (
        <CircleLoader />
      ) : (
        <>
          {isOpen && (
            <ModalContainer>
              <Modal setIsOpen={setIsOpen} type={type} tech={tech} />
            </ModalContainer>
          )}
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
              <div>
                <h2>Tecnologias</h2>
                <SmallButton
                  onClick={() => {
                    setType("add");
                    setIsOpen(true);
                  }}
                >
                  <AiOutlinePlus />
                </SmallButton>
              </div>
              <TechList
                techs={userInfo["techs"]}
                setIsOpen={setIsOpen}
                setType={setType}
                setTech={setTech}
              />
            </ContentContainer>
          </Main>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
