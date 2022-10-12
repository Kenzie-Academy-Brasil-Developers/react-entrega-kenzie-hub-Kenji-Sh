import { useState } from "react";
import { Container, StyledSelect, Options } from "./Select.style";

const Select = ({ name, label, register, options, placeholder, selectRef }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledSelect isActive={isActive} onClick={() => setIsActive(!isActive)}>
        <input
          ref={selectRef}
          value={selectRef.current}
          {...register(name)}
          placeholder={placeholder}
          readOnly
        />
        <Options isActive={isActive}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                selectRef.current = option;
              }}
            >
              {option}
            </li>
          ))}
        </Options>
      </StyledSelect>
    </Container>
  );
};

export default Select;
