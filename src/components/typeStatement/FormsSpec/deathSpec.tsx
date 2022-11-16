import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "../statementTypes.module.css";

const DeathSpec = ({ numberForm, status, info }: any) => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{
          date: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.date) {
            errors.sex = "Обязательно к заполнению";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          status(numberForm);
          info(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.formMarried}>
              <div className={s.inputs}>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "dateDeath"}>Дата смерти</label>
                  <Field type="date" name="date" id={id + "dateDeath"} className={s.input} />
                  <ErrorMessage name="date" component="div" className={s.errorMessage} />
                </div>
              </div>
            </div>
            <button type="submit">Далее</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DeathSpec;
