import * as yup from "yup";

export const addTechFormSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Campo obrigatório"),
});
