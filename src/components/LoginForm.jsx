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
  console.log("🚀 > onSubmit > values", values);
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("🚀 > TextInput > props", props);
  console.log("🚀 > TextInput > field", field);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
      <br />
    </>
  );
};

export const LoginForm = (props) => (
  <>
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
          type="password"
          placeholder="Password"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </>
);
