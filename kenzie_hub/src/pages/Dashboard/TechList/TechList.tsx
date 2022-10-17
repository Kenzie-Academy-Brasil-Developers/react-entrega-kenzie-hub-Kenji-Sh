import { StyledUl } from "./TechList.style";
import Tech from "./Tech";
import { iTech } from "@customTypes/api";

type iTechListProps = {
  techs?: iTech[];
};

const TechList = ({ techs }: iTechListProps) => {
  return (
    <StyledUl>
      {techs?.length ? (
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
