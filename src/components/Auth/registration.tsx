import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "../../pages/auth/auth.module.css";

const Registation = () => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", passwordRepeat: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Обязательное поле";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Неправильный Email";
          }
          if (values.password.length < 3) {
            errors.password = "Пароль должен быть не менее 3-х символов";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.inputs}>
              <div className={s.inputBlock}>
                <label htmlFor={id + "email"}>Email</label>
                <Field type="email" name="email" id={id + "email"} placeholder="Логин" />
                <ErrorMessage name="email" component="div" className={s.errorMessage} />
              </div>
              <div className={s.inputBlock}>
                <label htmlFor={id + "password"}>Password</label>
                <Field type="password" name="password" id={id + "password"} placeholder="Пароль" />
                <ErrorMessage name="password" component="div" className={s.errorMessage} />
              </div>
            </div>
            <div className={s.buttons}>
              <button type="submit" disabled={isSubmitting}>
                Войти
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Registation;
