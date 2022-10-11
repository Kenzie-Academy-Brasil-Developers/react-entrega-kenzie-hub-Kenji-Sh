import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: auto;
`;

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContentContainer = styled(Container)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  height: 100%;
  padding: 0 12px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h2 {
      font-size: 16px;
      font-weight: 600;
      line-height: 18px;
    }
  }
`;

export const Navbar = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  min-height: 72px;
  border-bottom: solid 1px var(--grey_3);
  background: var(--grey_4);
`;

export const Header = styled.header`
  min-height: 118px;
  margin-top: 72px;
  border-bottom: solid 1px var(--grey_3);

  h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: var(--grey_1);
  }

  > div {
    gap: 12px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
`;

export const Main = styled.main`
  height: 100%;
  margin-top: 38px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  > div {
    flex-direction: column;
    align-items: flex-start;
    justify-content: initial;
    margin: 0 auto;
    margin-bottom: 38px;
    gap: 24px;

    ul {
      max-height: 416px;
      overflow-y: auto;
    }
  }
`;
