import { useState } from "react";
import { Container, StyledSelect, Options } from "./Select.style";

const Select = ({ label, name, register }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledSelect isActive={isActive} onClick={handleToggle}>
        <input name={name} value={value} {...register(name)} readOnly />
        <Options isActive={isActive}>
          <li onClick={(e) => setValue(e.target.textContent)}>
            Primeiro módulo (Introdução ao Frontend)
          </li>
          <li onClick={(e) => setValue(e.target.textContent)}>
            Segundo módulo (Frontend Avançado)
          </li>
          <li onClick={(e) => setValue(e.target.textContent)}>
            Terceiro módulo (Introdução ao Backend)
          </li>
          <li onClick={(e) => setValue(e.target.textContent)}>
            Quarto módulo (Backend Avançado)
          </li>
        </Options>
      </StyledSelect>
    </Container>
  );
};

export default Select;
