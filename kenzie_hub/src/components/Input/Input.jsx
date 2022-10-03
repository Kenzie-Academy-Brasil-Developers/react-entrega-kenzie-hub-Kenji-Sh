import { Container, InputContainer } from "./Input.style";

const Input = ({ withBorder, label, name, register, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer withBorder={withBorder}>
        <input name={name} {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
