import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  password: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(6, "Must be 6 characters or more")
    .required("Required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <br />
    </>
  );
};

export const LoginForm = (props) => {
  return (
    <>
      <p>Login page formik</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <TextInput
            label="User Name"
            name="username"
            type="text"
            placeholder="UserName"
          />
          <TextInput
            label="Password"
            name="password"
            type="text"
            placeholder="Password"
          />
        </Form>
      </Formik>
    </>
  );
};
