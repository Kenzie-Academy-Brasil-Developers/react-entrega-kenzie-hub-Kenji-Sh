import { Container, InputContainer } from "./Input.style";

const Input = ({ withBorder, label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer withBorder={withBorder}>
        <input name={name} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
