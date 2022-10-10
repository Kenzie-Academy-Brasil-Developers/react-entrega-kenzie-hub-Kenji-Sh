import Tech from "./Tech";
import { StyledUl } from "./TechList.style";

const TechList = ({ techs, setIsOpen }) => {
  return (
    <StyledUl>
      {techs.length ? (
        techs.map((tech) => <Tech setIsOpen={setIsOpen} />)
      ) : (
        <p>Nada</p>
      )}
      <Tech />
      <Tech />
      <Tech />
      <Tech />
      <Tech />
    </StyledUl>
  );
};

export default TechList;
