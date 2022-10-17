import { useState } from "react";
import { Container, StyledSelect, Options } from "./Select.style";

type iSelectProps = {
  name: string;
  label: string;
  register: Function;
  options: string[];
  placeholder?: string;
  selectRef: React.MutableRefObject<string>;
};

const Select = ({
  name,
  label,
  register,
  options,
  placeholder,
  selectRef,
}: iSelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledSelect isActive={isActive} onClick={() => setIsActive(!isActive)}>
        <input
          ref={selectRef}
          value={selectRef["current"]}
          placeholder={placeholder}
          {...register(name)}
          readOnly
        />
        <Options isActive={isActive}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                selectRef["current"] = option;
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
