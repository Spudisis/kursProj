import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./statementTypes.module.css";
const PassportInfo = ({ statement, numberForm, status, info, necessarily }: any) => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{
          nameDocM: "",
          serPasM: "",
          numPasM: "",
          orgPasM: "",
          datePasM: "",
          nameDocW: "",
          serPasW: "",
          numPasW: "",
          orgPasW: "",
          datePasW: "",
        }}
        validate={(values) => {
          const errors: any = {};

          if (necessarily) {
            if (!values.nameDocM) {
              errors.nameDocM = "Обязательное поле";
            }
            if (!values.serPasM) {
              errors.serPasM = "Обязательное поле";
            } else if (String(values.serPasM).length !== 4) {
              errors.serPasM = "4 цифры*";
            }
            if (!values.numPasM) {
              errors.numPasM = "Обязательное поле";
            } else if (String(values.numPasM).length !== 6) {
              errors.numPasM = "6 цифр*";
            }
            if (!values.orgPasM) {
              errors.orgPasM = "Обязательное поле";
            }
            if (!values.datePasM) {
              errors.datePasM = "Обязательное поле";
            }
          }

          if (!values.nameDocW) {
            errors.nameDocW = "Обязательное поле";
          }
          if (!values.serPasW) {
            errors.serPasW = "Обязательное поле";
          } else if (String(values.serPasW).length !== 4) {
            errors.serPasW = "4 цифры*";
          }
          if (!values.numPasW) {
            errors.numPasW = "Обязательное поле";
          } else if (String(values.numPasW).length !== 6) {
            errors.numPasW = "6 цифр*";
          }
          if (!values.orgPasW) {
            errors.orgPasW = "Обязательное поле";
          }
          if (!values.datePasW) {
            errors.datePasW = "Обязательное поле";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          info(values);
          status(numberForm);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            {statement === "death" ? "" : <h2>Паспортные данные</h2>}
            <div className={s.formMarried}>
              <div className={s.inputs}>
                {statement === "death" ? <h2>Паспортные данные умершего</h2> : ""}
                <div className={s.documentBlock}>
                  <div className={s.inputBlock}>
                    <label htmlFor={id + "nameDocM"}>Наименование документа</label>
                    <Field
                      type="text"
                      name="nameDocM"
                      id={id + "nameDocM"}
                      placeholder="Документ"
                      className={s.input}
                    />
                    <ErrorMessage name="nameDocM" component="div" className={s.errorMessage} />
                  </div>
                  <div className={s.numSerPas}>
                    <div className={s.serPas}>
                      <label htmlFor="serPasM">Серия</label>
                      <Field
                        type="number"
                        className={s.docInput}
                        name="serPasM"
                        id={id + "serPasM"}
                        placeholder="Серия"
                      />
                      <ErrorMessage name="serPasM" component="div" className={s.errorMessageSerPas} />
                    </div>
                    <div className={s.numPas}>
                      <label htmlFor={id + "numPasM"}>№</label>
                      <Field
                        type="number"
                        className={s.docInput}
                        name="numPasM"
                        id={id + "numPasM"}
                        placeholder="Номер"
                      />
                      <ErrorMessage name="numPasM" component="div" className={s.errorMessageSerPas} />
                    </div>
                  </div>
                  <div className={s.inputBlock}>
                    <label htmlFor={id + "orgPasM"}>Наименование органа</label>
                    <Field type="text" name="orgPasM" id={id + "orgPasM"} placeholder="Кем выдан" className={s.input} />
                    <ErrorMessage name="orgPasM" component="div" className={s.errorMessage} />
                  </div>
                  <div className={s.inputBlock}>
                    <label htmlFor={id + "datePasM"}>Дата выдачи документа</label>
                    <Field type="date" name="datePasM" id={id + "datePasM"} className={s.input} />
                    <ErrorMessage name="datePasM" component="div" className={s.errorMessage} />
                  </div>
                </div>
              </div>

              <div className={s.inputs}>
                {statement === "death" ? <h2>Паспортные данные заявителя</h2> : ""}
                <div className={s.documentBlock}>
                  <div className={s.inputBlock}>
                    <label htmlFor={id + "nameDocW"}>Наименование документа</label>
                    <Field
                      type="text"
                      name="nameDocW"
                      id={id + "nameDocW"}
                      placeholder="Документ"
                      className={s.input}
                    />
                    <ErrorMessage name="nameDocW" component="div" className={s.errorMessage} />
                  </div>

                  <div className={s.numSerPas}>
                    <div className={s.serPas}>
                      <label htmlFor="serPasW">Серия</label>
                      <Field
                        type="number"
                        className={s.docInput}
                        name="serPasW"
                        id={id + "serPasW"}
                        placeholder="Серия"
                      />
                      <ErrorMessage name="serPasW" component="div" className={s.errorMessageSerPas} />
                    </div>
                    <div className={s.numPas}>
                      <label htmlFor={id + "numPasW"}>№</label>
                      <Field
                        type="number"
                        className={s.docInput}
                        name="numPasW"
                        id={id + "numPasW"}
                        placeholder="Номер"
                      />
                      <ErrorMessage name="numPasW" component="div" className={s.errorMessageSerPas} />
                    </div>
                  </div>
                  <div className={s.inputBlock}>
                    <label htmlFor={id + "orgPasW"}>Наименование органа</label>
                    <Field type="text" name="orgPasW" id={id + "orgPasW"} placeholder="Кем выдан" className={s.input} />
                    <ErrorMessage name="orgPasW" component="div" className={s.errorMessage} />
                  </div>
                  <div className={s.inputBlock}>
                    <label htmlFor={id + "datePasW"}>Дата выдачи документа</label>
                    <Field type="date" name="datePasW" id={id + "datePasW"} className={s.input} />
                    <ErrorMessage name="datePasW" component="div" className={s.errorMessage} />
                  </div>
                </div>
              </div>
            </div>
            <div className={s.buttons}>
              <button type="submit">Далее</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PassportInfo;
