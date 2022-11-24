import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "../statementTypes.module.css";
import { useSelector } from "react-redux";
import { getUid } from "../../../redux/slices/slice";
import { UploadImg } from "../../../firebase/addFile";
import { v4 as uuidv4 } from "uuid";
const DeathSpec = ({ numberForm, status, info }: any) => {
  const { uid } = useSelector(getUid);
  const [fileUpload, setFileUpload] = React.useState("" as any);

  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{
          date: "",
          fileDeath: "",
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
          let { name } = fileUpload;
          const randId = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
          // name = randId + name;
          UploadImg({ fileUpload, uid });
          info({ name, ...values });
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
                <div className={s.inputBlock}>
                  <label htmlFor={id + "dateDeath"}>Амбулаторной карты умершего</label>
                  <Field
                    type="file"
                    name="dateDeath"
                    id={id + "dateDeath"}
                    className={s.input}
                    onChange={(e: any) => setFileUpload(e.target.files[0])}
                  />
                  <ErrorMessage name="dateDeath" component="div" className={s.errorMessage} />
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
