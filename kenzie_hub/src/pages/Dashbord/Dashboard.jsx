import { useContext, useState } from "react";
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
import Modal from "@components/Modal";
import { SmallButton } from "@components/Button";
import CircleLoader from "@components/CircleLoader";
import { UserContext } from "@contexts/UserContext";
import { TechContext } from "@contexts/TechContext";

const Dashboard = () => {
  const { logout, userInfo, loading } = useContext(UserContext);
  const { isOpen, openTechModal } = useContext(TechContext);

  return (
    <Container>
      {loading ? (
        <CircleLoader />
      ) : (
        <>
          {isOpen && (
            <ModalContainer>
              <Modal />
            </ModalContainer>
          )}
          <Navbar>
            <ContentContainer>
              <img src={Logo} alt="logo" />
              <SmallButton onClick={() => logout()}>Sair</SmallButton>
            </ContentContainer>
          </Navbar>
          <Header>
            <ContentContainer>
              <h1>Olá, {userInfo.name}</h1>
              <p>{userInfo.course_module}</p>
            </ContentContainer>
          </Header>
          <Main>
            <ContentContainer>
              <div>
                <h2>Tecnologias</h2>
                <SmallButton
                  onClick={() => {
                    openTechModal("add");
                  }}
                >
                  <AiOutlinePlus />
                </SmallButton>
              </div>
              <TechList techs={userInfo["techs"]} />
            </ContentContainer>
          </Main>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
