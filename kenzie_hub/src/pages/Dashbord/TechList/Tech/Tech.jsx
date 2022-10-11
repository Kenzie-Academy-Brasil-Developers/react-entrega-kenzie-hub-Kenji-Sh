import { StyledLi } from "./Tech.style";

const Tech = ({ id, title, status, setType, setIsOpen, setTech }) => {
  return (
    <StyledLi
      onClick={() => {
        setType("edit");
        setIsOpen(true);
        setTech({
          id,
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
