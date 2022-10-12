import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px;
  border-radius: 4px;
  background: var(--grey_4);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: var(--grey_2);

    p {
      color: inherit;
    }
  }

  h3 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    color: var(--grey_1);
  }
`;
