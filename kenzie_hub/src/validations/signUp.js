import * as yup from "yup";

export const signUpFormSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Mínimo de 8 dígitos")
    .matches(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "A senha deve conter letras, números e ao menos um símbolo"
    ),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  moduleSelect: yup.string().required("Campo obrigatório"),
});
