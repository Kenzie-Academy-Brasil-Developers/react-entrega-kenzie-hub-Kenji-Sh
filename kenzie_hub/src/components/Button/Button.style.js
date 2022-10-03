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
`;
