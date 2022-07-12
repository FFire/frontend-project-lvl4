import { Formik, Form, useField, ErrorMessage } from "formik";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import cn from "classnames";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(2, "Must be 2 characters or more")
    .required("Name is required"),
  password: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(2, "Must be 2 characters or more")
    .required("Passord is required"),
});

const onSubmit = (...values) => {
  console.log("🚀 > onSubmit > values", values);
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const inputClass = cn({
    "form-control": true,
    "is-invalid": touched && error,
    "is-valid": touched && !error,
  });

  return (
    <>
      <div className="form-floating mb-3">
        <input className={inputClass} {...field} {...props} />
        <label className="form-label" htmlFor={props.name}>
          {label}
        </label>
        <ErrorMessage bg="danger" role="alert" component={Badge} name={props.name} />
      </div>
    </>
  );
};

export const LoginForm = () => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ isValid, dirty }) => (
      <Form className="col-12 col-md-6 mt-3 mt-mb-0" noValidate>
        <h1 className="text-center mb-3">Login</h1>

        <TextInput required name="username" type="text" label="User Name" placeholder="User Name" />

        <TextInput
          required
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
        />

        <Button className="w-100 btn btn-primary" type="submit" disabled={!(isValid && dirty)}>
          Login
        </Button>
      </Form>
    )}
  </Formik>
);
