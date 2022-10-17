import { Container, InputContainer } from "./Input.style";

type iInputProps = {
  label: string;
  name: string;
  register?: Function;
  error?: string;
  [rest: string]: any;
};

const Input = ({ label, name, register, error, ...rest }: iInputProps) => {
  return (
    <Container>
      <label htmlFor={name}>
        {label}
        {!!error && <span> - {error}</span>}
      </label>
      <InputContainer>
        <input {...(register && { ...register(name) })} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
