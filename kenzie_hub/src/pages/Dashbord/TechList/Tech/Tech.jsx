import { StyledLi } from "./Tech.style";

const Tech = ({ setIsOpen }) => {
  return (
    <StyledLi onClick={() => setIsOpen(true)}>
      <h3>React JS</h3>
      <p>Intermediário</p>
    </StyledLi>
  );
};

export default Tech;
