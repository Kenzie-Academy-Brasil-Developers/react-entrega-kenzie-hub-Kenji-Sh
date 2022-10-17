import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  gap: 16px;
  border-radius: 4px;
  background: var(--grey_3);

  @media screen and (max-width: 425px) {
    padding: 24px 12px;
  }
`;
