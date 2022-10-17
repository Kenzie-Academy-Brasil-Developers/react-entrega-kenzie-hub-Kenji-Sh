import * as yup from "yup";

export const editTechFormSchema = yup.object().shape({
  status: yup.string(),
});
