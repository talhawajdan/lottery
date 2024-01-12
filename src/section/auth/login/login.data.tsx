import * as Yup from "yup";

interface IdefValue {
  email: string;
  password: string;
}

export const defValues: IdefValue = {
  email: "",
  password: "",
};

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be of minimum 8 characters length"),
});
