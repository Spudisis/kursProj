import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "../statementTypes.module.css";
import { UploadImg } from "../../../firebase/addFile";
import { useSelector } from "react-redux";
import { getUid } from "../../../redux/slices/slice";
import { v4 as uuidv4 } from "uuid";
const BornSpec = ({ numberForm, status, info }: any) => {
  const id = React.useId();
  const { uid } = useSelector(getUid);
  const [fileUpload, setFileUpload] = React.useState("" as any);

  return (
    <>
      <Formik
        initialValues={{
          sex: "",
          dateBorn: "",
          FIO: "",
          fileBorn: "",
          marriedAct: "",
          marriedDate: "",
          marriedNamePlace: "",
          fatherAct: "",
          fatherActDate: "",
          fatherNameAct: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.sex) {
            errors.sex = "Обязательно к заполнению";
          }
          if (!values.dateBorn) {
            errors.dateBorn = "Обязательно к заполнению";
          }
          if (!values.FIO) {
            errors.FIO = "Обязательно к заполнению";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, setFieldValue }) => {
          status(numberForm);

          let { name } = fileUpload;
          const randId = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
          // name = randId + name;

          UploadImg({ fileUpload, uid });
          console.log(values);
          console.log({ name, ...values });
          info({ name, ...values });
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.formMarried}>
              <div className={s.inputs}>
                <h2>Ребёнок</h2>
                <div role="group" className={s.radioBlock}>
                  <p>Пол ребёнка</p>
                  <div className={s.radios}>
                    <label className={s.radio}>
                      <Field type="radio" name="sex" id={id + "sex"} value="М" className={s.input} /> Mужской
                    </label>
                    <label className={s.radio}>
                      <Field type="radio" name="sex" id={id + "sex"} value="W" className={s.input} /> Женский
                    </label>
                    <ErrorMessage name="sex" component="div" className={s.errorMessageRadio} />
                  </div>
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "dateBorn"}>Дата рождения ребёнка</label>
                  <Field type="date" name="dateBorn" id={id + "dateBorn"} className={s.input} />
                  <ErrorMessage name="dateBorn" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "FIO"}>Фамилия Имя Отчество</label>
                  <Field type="text" name="FIO" id={id + "FIO"} placeholder="ФИО" className={s.input} />
                  <ErrorMessage name="FIO" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "fileBorn"}>Свидетельство рождения ребенка</label>
                  <Field
                    type="file"
                    name="fileBorn"
                    id={id + "fileBorn"}
                    placeholder="ФИО"
                    className={s.input}
                    onChange={(e: any) => setFileUpload(e.target.files[0])}
                  />
                  <ErrorMessage name="fileBorn" component="div" className={s.errorMessage} />
                </div>

                <h2>Свидетельство об установлении отцовства</h2>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "fatherAct"}>Запись акта №</label>
                  <Field type="text" name="fatherAct" id={id + "fatherAct"} placeholder="Номер" className={s.input} />
                  <ErrorMessage name="fatherAct" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "fatherActDate"}>Дата</label>
                  <Field type="date" name="fatherActDate" id={id + "fatherActDate"} className={s.input} />
                  <ErrorMessage name="fatherActDate" component="div" className={s.errorMessage} />
                </div>
                <div className={s.inputBlock}>
                  <label htmlFor={id + "fatherNameAct"}>Наименование органа ЗАГС</label>
                  <Field
                    type="text"
                    name="fatherNameAct"
                    id={id + "fatherNameAct"}
                    placeholder="ЗАГС"
                    className={s.input}
                  />
                  <ErrorMessage name="fatherNameAct" component="div" className={s.errorMessage} />
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

export default BornSpec;
