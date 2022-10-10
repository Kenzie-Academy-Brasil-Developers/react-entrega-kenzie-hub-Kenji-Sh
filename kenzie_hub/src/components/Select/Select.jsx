import { useState } from "react";
import { Container, StyledSelect, Options } from "./Select.style";

const Select = ({ label, name, register, options, initialValue }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledSelect isActive={isActive} onClick={handleToggle}>
        <input name={name} value={value} {...register(name)} readOnly />
        <Options isActive={isActive}>
          {options.map((option) => (
            <li onClick={(e) => setValue(e.target.textContent)}>{option}</li>
          ))}
        </Options>
      </StyledSelect>
    </Container>
  );
};

export default Select;
