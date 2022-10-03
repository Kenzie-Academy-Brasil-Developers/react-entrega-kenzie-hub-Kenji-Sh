import { Container, InputContainer } from "./Input.style";

const Input = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer>
        <input name={name} {...rest}/>
      </InputContainer>
    </Container>
  );
};

export default Input;
