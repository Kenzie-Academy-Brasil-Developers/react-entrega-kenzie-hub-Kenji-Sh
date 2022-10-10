import styled from "styled-components";

export const Container = styled.div`
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

export const ModalContent = styled.div`
  width: 369px;
  border-radius: 4px;
  background: var(--grey_3);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 20px;
    border-radius: 4px 4px 0 0;
    background: var(--grey_2);

    h3 {
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 22px;
    gap: 20px;
  }
`;
