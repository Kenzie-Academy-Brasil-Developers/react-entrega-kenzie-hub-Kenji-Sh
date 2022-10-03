import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 12px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  border-bottom: solid 1px var(--grey_3);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 118px;
  gap: 10px;
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 38px;
  gap: 24px;

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
`;
