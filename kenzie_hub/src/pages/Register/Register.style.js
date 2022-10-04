import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 369px;
  margin: auto;
  padding: 60px 12px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 36px;
  }
`;

const appearFromBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 42px 22px;
  gap: 22px;
  border-radius: 8px;
  background: var(--grey_3);
  animation: ${appearFromBottom} 1s;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 22px;

    h1 {
      align-self: center;
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
    }
  }

  p {
    align-self: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--grey_1);
  }
`;
