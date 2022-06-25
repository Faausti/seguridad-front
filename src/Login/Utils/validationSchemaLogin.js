import * as Yup from "yup";

const REQUIRED = "Este campo es obligatorio";

const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().required(REQUIRED).email("Formato de email inválido"),
  password: Yup.string()
    .required(REQUIRED)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/,
      "Debe contener al menos 8 caracteres con una mayúscula, una minúscula y un número"
    ),
});

export default validationSchemaLogin;
