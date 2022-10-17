import { useContext } from "react";

import { StyledLi } from "./Tech.style";
import { TechContext } from "@contexts/TechContext";
import { iTechContext } from "@customTypes/techContext";
import { iTech } from "@customTypes/api";

const Tech = ({ id, title, status }: iTech) => {
  const { openTechModal } = useContext<iTechContext>(TechContext);

  return (
    <StyledLi
      onClick={() => {
        openTechModal("edit", {
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
