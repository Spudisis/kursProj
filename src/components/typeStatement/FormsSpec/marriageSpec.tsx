import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "../statementTypes.module.css";

const MarriageSpec = ({ status, info, numberForm, setEnd }: any) => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{
          lastDocM: "",
          lastDocW: "",
          familyM: "",
          familyW: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.lastDocM) {
            errors.lastDocM = "Обязательное поле";
          }
          if (!values.lastDocW) {
            errors.lastDocW = "Обязательное поле";
          }
          if (!values.familyM) {
            errors.familyM = "Обязательное поле";
          }
          if (!values.familyW) {
            errors.familyW = "Обязательное поле";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          status(numberForm);
          setEnd(true);
          info(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.formMarried}>
              <div className={s.inputs}>
                <h2>Для него</h2>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "lastDocM"}>Предыдущий брак</label>
                  <Field type="text" name="lastDocM" id={id + "lastDocM"} placeholder="Наличие" className={s.input} />
                  <ErrorMessage name="lastDocM" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "familyM"}>Присвоить фамилию</label>
                  <Field type="text" name="familyM" id={id + "familyM"} placeholder="Фамилия" className={s.input} />
                  <ErrorMessage name="familyM" component="div" className={s.errorMessage} />
                </div>
              </div>
              <div className={s.inputs}>
                <h2>Для неё</h2>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "lastDocW"}>Предыдущий брак</label>
                  <Field type="text" name="lastDocW" id={id + "lastDocW"} placeholder="Наличие" className={s.input} />
                  <ErrorMessage name="lastDocW" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "familyW"}>Присвоить фамилию</label>
                  <Field type="text" name="familyW" id={id + "familyW"} placeholder="Фамилия" className={s.input} />
                  <ErrorMessage name="familyW" component="div" className={s.errorMessage} />
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

export default MarriageSpec;
