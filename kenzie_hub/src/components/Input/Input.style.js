import styled from "styled-components";

export const Container = styled.div`
  text-align: left;

  label {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  margin-top: 22px;
  padding: 0 16px;
  border: ${({ withBorder }) =>
    withBorder ? "solid 1px var(--grey_0)" : "none"};
  border-radius: 8px;
  background: var(--grey_2);

  input {
    flex: 1;
    align-items: center;
    border: 0;
    color: var(--grey_0);
    background: transparent;

    &::placeholder {
      color: var(--grey_1);
    }
  }
`;
