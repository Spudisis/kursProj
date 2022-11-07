import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./statementTypes.module.css";

const ActZags = ({ numberForm, status, info, type, necessarily }: any) => {
  const id = React.useId();

  return (
    <>
      <Formik
        initialValues={{
          marriedAct: "",
          marriedDate: "",
          marriedNamePlace: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (necessarily) {
            if (!values.marriedAct) {
              errors.marriedAct = "Обязательно к заполнению";
            }
            if (!values.marriedDate) {
              errors.marriedDate = "Обязательно к заполнению";
            }
            if (!values.marriedNamePlace) {
              errors.marriedNamePlace = "Обязательно к заполнению";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          status(numberForm);
          info(values);

          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.formMarried}>
              <div className={s.inputs}>
                {type === "born" && <h2>Свидетельство о заключении брака (если есть)</h2>}
                {type === "divorce" && <h2>Свидетельство о заключении брака</h2>}
                <div className={s.inputBlock}>
                  <label htmlFor={id + "marriedAct"}>Запись акта брака №</label>
                  <Field type="text" name="marriedAct" id={id + "marriedAct"} placeholder="Номер" className={s.input} />
                  <ErrorMessage name="marriedAct" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "marriedDate"}>Дата заключения брака</label>
                  <Field type="date" name="marriedDate" id={id + "marriedDate"} className={s.input} />
                  <ErrorMessage name="marriedDate" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "marriedNamePlace"}>Наименование органа ЗАГС</label>
                  <Field
                    type="text"
                    name="marriedNamePlace"
                    id={id + "marriedNamePlace"}
                    placeholder="ЗАГС"
                    className={s.input}
                  />
                  <ErrorMessage name="marriedNamePlace" component="div" className={s.errorMessage} />
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

export { ActZags };
