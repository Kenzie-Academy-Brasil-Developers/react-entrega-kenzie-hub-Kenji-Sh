import { StyledUl } from "./TechList.style";
import Tech from "./Tech";

const TechList = ({ techs }) => {
  return (
    <StyledUl>
      {techs.length ? (
        techs.map(({ id, title, status }) => (
          <Tech key={id} id={id} title={title} status={status} />
        ))
      ) : (
        <p>Você ainda não possui nenhuma tecnologia cadastrada.</p>
      )}
    </StyledUl>
  );
};

export default TechList;
