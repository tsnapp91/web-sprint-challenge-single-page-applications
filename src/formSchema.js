import * as yup from "yup";

const formSchema = yup.object().shape({
  customer: yup.string().trim().min(2, "name must be at least 2 characters "),
  size: yup.string().oneOf(["small", "medium", "large"]),
  special: yup.string().trim(),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  peppers: yup.boolean(),
  sausage: yup.boolean(),
});

export default formSchema;
