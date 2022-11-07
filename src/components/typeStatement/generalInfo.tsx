import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./statementTypes.module.css";

const GeneralInfo = ({ statement, numberForm, status, info, necessarily }: any) => {
  const id = React.useId();
  let values = {};

  return (
    <>
      <Formik
        initialValues={{
          fioM: "",
          birthdayM: "",
          birthdayPlaceM: "",
          nationalityM: "",
          nationalM: "",
          placeLiveM: "",
          fioW: "",
          birthdayW: "",
          birthdayPlaceW: "",
          nationalityW: "",
          nationalW: "",
          placeLiveW: "",
        }}
        validate={(values) => {
          const errors: any = {};

          if (necessarily) {
            if (!values.fioM) {
              errors.fioM = "Обязательное поле";
            }
            if (!values.birthdayM) {
              errors.birthdayM = "Обязательное поле";
            }
            if (!values.birthdayPlaceM) {
              errors.birthdayPlaceM = "Обязательное поле";
            }
            if (!values.nationalityM) {
              errors.nationalityM = "Обязательное поле";
            }
            if (statement !== "death")
              if (!values.placeLiveM) {
                errors.placeLiveM = "Обязательное поле";
              }
          }

          if (!values.fioW) {
            errors.fioW = "Обязательное поле";
          }
          if (!values.birthdayW) {
            errors.birthdayW = "Обязательное поле";
          }
          if (!values.nationalityW) {
            errors.nationalityW = "Обязательное поле";
          }
          if (!values.birthdayPlaceW) {
            errors.birthdayPlaceW = "Обязательное поле";
          }
          if (!values.placeLiveW) {
            errors.placeLiveW = "Обязательное поле";
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
                {statement === "death" ? <h2>Данные умершего</h2> : <h2>Для него</h2>}
                <div className={s.inputBlock}>
                  <label htmlFor={id + "fioM"}>Фамилия Имя Отчество</label>
                  <Field type="text" name="fioM" id={id + "fioM"} placeholder="ФИО" className={s.input} />
                  <ErrorMessage name="fioM" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "birthdayM"}>Дата рождения</label>
                  <Field type="date" name="birthdayM" id={id + "birthdayM"} className={s.input} />
                  <ErrorMessage name="birthdayM" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "birthdayPlaceM"}>Место рождения </label>
                  <Field
                    type="text"
                    name="birthdayPlaceM"
                    id={id + "birthdayPlaceM"}
                    placeholder="Город"
                    className={s.input}
                  />
                  <ErrorMessage name="birthdayPlaceM" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "nationalityM"}>Гражданство</label>
                  <Field
                    type="text"
                    name="nationalityM"
                    id={id + "nationalityM"}
                    placeholder="Гражданство"
                    className={s.input}
                  />
                  <ErrorMessage name="nationalityM" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "nationalM"}>Национальность</label>
                  <Field
                    type="text"
                    name="nationalM"
                    id={id + "nationalM"}
                    placeholder="Национальность"
                    className={s.input}
                  />
                  <ErrorMessage name="nationalM" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "placeLiveM"}>Место жительства</label>
                  <Field
                    type="text"
                    name="placeLiveM"
                    id={id + "placeLiveM"}
                    placeholder="Место жительства"
                    className={s.input}
                  />
                  <ErrorMessage name="placeLiveM" component="div" className={s.errorMessage} />
                </div>
              </div>

              <div className={s.inputs}>
                {statement === "death" ? <h2>Данные заявителя</h2> : <h2>Для неё</h2>}
                <div className={s.inputBlock}>
                  <label htmlFor={id + "fioW"}>Фамилия Имя Отчество</label>
                  <Field type="text" name="fioW" id={id + "fioW"} placeholder="ФИО" className={s.input} />
                  <ErrorMessage name="fioW" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "birthdayW"}>Дата рождения</label>
                  <Field type="date" name="birthdayW" id={id + "birthdayW"} className={s.input} />
                  <ErrorMessage name="birthdayW" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "birthdayPlaceW"}>Место рождения</label>
                  <Field
                    type="text"
                    name="birthdayPlaceW"
                    id={id + "birthdayPlaceW"}
                    placeholder="Место рождения"
                    className={s.input}
                  />
                  <ErrorMessage name="birthdayPlaceW" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "nationalityW"}>Гражданство</label>
                  <Field
                    type="text"
                    name="nationalityW"
                    id={id + "nationalityW"}
                    placeholder="Гражданство"
                    className={s.input}
                  />
                  <ErrorMessage name="nationalityW" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "nationalW"}>Национальность</label>
                  <Field
                    type="text"
                    name="nationalW"
                    id={id + "nationalW"}
                    placeholder="Национальность"
                    className={s.input}
                  />
                  <ErrorMessage name="nationalW" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "placeLiveW"}>Место жительства</label>
                  <Field
                    type="text"
                    name="placeLiveW"
                    id={id + "placeLiveW"}
                    placeholder="Место жительства"
                    className={s.input}
                  />
                  <ErrorMessage name="placeLiveW" component="div" className={s.errorMessage} />
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

export default GeneralInfo;
