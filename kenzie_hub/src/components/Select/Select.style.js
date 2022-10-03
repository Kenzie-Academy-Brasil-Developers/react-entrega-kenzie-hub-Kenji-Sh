import styled from "styled-components";

export const Container = styled.div`
  text-align: left;

  label {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const StyledSelect = styled.div`
  position: relative;
  height: 48px;
  margin-top: 22px;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: ${({ isActive }) =>
      isActive
        ? "translateY(-50%) rotate(-225deg)"
        : "translateY(-50%) rotate(-45deg)"};
    right: 16px;
    z-index: 1;
    width: 8px;
    height: 8px;
    border: solid 2px var(--grey_1);
    border-top: none;
    border-right: none;
    transition: 0.5s;
    pointer-events: none;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    border: none;
    border-radius: 8px;
    color: var(--grey_0);
    background-color: var(--grey_2);
    cursor: pointer;
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 47px;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  width: 100%;
  height: 144px;
  border-radius: 8px;
  background: var(--grey_2);
  overflow: auto;

  li {
    padding: 14px 16px;
    cursor: pointer;

    :hover {
      background: var(--grey_3);
    }
  }
`;
