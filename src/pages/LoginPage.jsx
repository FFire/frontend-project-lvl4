import { Formik } from "formik";

const LoginPage = (props) => {
  const onSubmit = () => {};

  return (
    <>
      <p>Login page</p>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
      ></Formik>
    </>
  );
};

export default LoginPage;
