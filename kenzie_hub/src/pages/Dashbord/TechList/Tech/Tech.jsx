import { StyledLi } from "./Tech.style";

const Tech = ({ title, status, setType, setIsOpen, setTech }) => {
  return (
    <StyledLi
      onClick={() => {
        setType("edit");
        setIsOpen(true);
        setTech({
          title,
          status,
        });
      }}
    >
      <h3>{title}</h3>
      <p>{status}</p>
    </StyledLi>
  );
};

export default Tech;
