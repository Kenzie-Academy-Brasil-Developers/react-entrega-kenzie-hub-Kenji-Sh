import Tech from "./Tech";
import { StyledUl } from "./TechList.style";

const TechList = ({ techs, setIsOpen, setType, setTech }) => {
  return (
    <StyledUl>
      {techs.length ? (
        techs.map(({ title, status }) => (
          <Tech
            key={title}
            title={title}
            status={status}
            setIsOpen={setIsOpen}
            setType={setType}
            setTech={setTech}
          />
        ))
      ) : (
        <p>Nada</p>
      )}
    </StyledUl>
  );
};

export default TechList;
