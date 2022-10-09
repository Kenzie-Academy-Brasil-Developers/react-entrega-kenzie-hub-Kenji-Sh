import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border: solid 2px
    ${({ pinkSchema }) =>
      pinkSchema ? "var(--color_primary)" : "var(--grey_1)"};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: var(--grey_0);
  background: ${({ pinkSchema }) =>
    pinkSchema ? "var(--color_primary)" : "var(--grey_1)"};
  transition: 0.5s;

  :hover {
    border-color: ${({ pinkSchema }) =>
      pinkSchema ? "var(--color_primary_focus)" : "var(--grey_2)"};
    background: ${({ pinkSchema }) =>
      pinkSchema ? "var(--color_primary_focus)" : "var(--grey_2)"};
  }

  :disabled {
    background: var(--color_primary_negative);
    border-color: var(--color_primary_negative);
    cursor: auto;
  }
`;

export const SmallButton = styled(Button)`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 40px;
  padding: 0 16px;
  border-color: var(--grey_3);
  font-size: 12px;
  font-weight: 600;
  line-height: 28px;
  background: var(--grey_3);

  svg {
    font-size: 24px;
  }
`;
