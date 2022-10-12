import { useContext } from "react";

import { StyledLi } from "./Tech.style";
import { TechContext } from "@contexts/TechContext";

const Tech = ({ id, title, status }) => {
  const { openTechModal } = useContext(TechContext);

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
