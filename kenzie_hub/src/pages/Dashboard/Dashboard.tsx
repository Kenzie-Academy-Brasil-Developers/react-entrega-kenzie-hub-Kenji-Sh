import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import {
  Container,
  ContentContainer,
  Navbar,
  Header,
  Main,
  ModalContainer,
} from "./Dashboard.style";
import { SmallButton } from "@components/Button";
import { TechContext } from "@contexts/TechContext";
import { UserContext } from "@contexts/UserContext";
import { iTechContext } from "@customTypes/techContext";
import { iUserContext } from "@customTypes/userContext";
// @ts-ignore
import Logo from "@assets/Logo.svg";
import TechList from "./TechList";
import Modal from "@components/Modal";
import CircleLoader from "@components/CircleLoader";

const Dashboard = () => {
  const { logout, userInfo, techList, loading } =
    useContext<iUserContext>(UserContext);
  const { isOpen, openTechModal } = useContext<iTechContext>(TechContext);

  return (
    <Container>
      {loading ? (
        <div className="loading">
          <CircleLoader />
        </div>
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
                    openTechModal("add");
                  }}
                >
                  <AiOutlinePlus />
                </SmallButton>
              </div>
              <TechList techs={techList} />
            </ContentContainer>
          </Main>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
