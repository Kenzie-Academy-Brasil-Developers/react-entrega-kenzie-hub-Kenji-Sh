import { useState } from "react";
import { Container, StyledSelect, Options } from "./Select.style";

const Select = ({ label, name }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("Primeiro Módulo");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledSelect isActive={isActive} onClick={handleToggle}>
        <input name={name} value={value} readOnly />
        <Options isActive={isActive}>
          <li onClick={(e) => setValue(e.target.textContent)}>
            Primeiro Módulo
          </li>
          <li onClick={(e) => setValue(e.target.textContent)}>
            Segundo Módulo
          </li>
          <li onClick={(e) => setValue(e.target.textContent)}>
            Terceiro Módulo
          </li>
          <li onClick={(e) => setValue(e.target.textContent)}>Quarto Módulo</li>
          <li onClick={(e) => setValue(e.target.textContent)}>Quinto Módulo</li>
          <li onClick={(e) => setValue(e.target.textContent)}>Sexto Módulo</li>
        </Options>
      </StyledSelect>
    </Container>
  );
};

export default Select;
