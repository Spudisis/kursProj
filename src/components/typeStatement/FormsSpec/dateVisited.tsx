import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "../statementTypes.module.css";

const DateVisited = ({ numberForm, status, info, setEnd }: any) => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{
          dateVisited: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.dateVisited) {
            errors.dateVisited = "Обязательно к заполнению";
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          status(numberForm);
          info(values);
          setEnd(true);
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.formMarried}>
              <div className={s.inputs}>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "dateVisited"}>Дата посещения</label>
                  <Field type="date" name="dateVisited" id={id + "dateVisited"} className={s.input} />
                  <ErrorMessage name="dateVisited" component="div" className={s.errorMessage} />
                </div>
              </div>
            </div>

            <button type="submit">Подать заявление</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DateVisited;
