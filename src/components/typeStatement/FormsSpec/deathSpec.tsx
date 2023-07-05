import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useSelector } from "react-redux";
import { getUid } from "../../../redux/slices/slice";
import { UploadImg } from "../../../firebase/addFile";

import { FormBlock } from "../../../componentStyled/Form/Form";
import { Button } from "../button";
import { Window } from "../../../componentStyled/window";
import { InputBlockDiv } from "../../../componentStyled/Form/InputBlock";
import { ColumnBlock } from "../../../componentStyled/Form/column";
import { DownloadFileCheck, ErrorFile } from "./bornSpec";

const DeathSpec = ({ numberForm, status, info }: any) => {
  const { uid } = useSelector(getUid);
  const [errorFile, setErrorFile] = React.useState("none");
  const [fileUpload, setFileUpload] = React.useState("" as any);
  const [downloadFileCheck, setDownloadFileCheck] = React.useState("none");
  const JSJoda = require("@js-joda/core");
  let LocalDate = JSJoda.LocalDate;
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
            errors.date = "Обязательно к заполнению";
          } else {
            const start_date = new LocalDate.parse(values.date);

            if (JSJoda.ChronoUnit.DAYS.between(start_date, LocalDate.now()) < 0) {
              errors.date = "Неверная дата";
            }
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          UploadImg({ fileUpload, uid });
          await UploadImg({ fileUpload, uid, status, numberForm, info, values, setErrorFile, setDownloadFileCheck });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormBlock>
              <Window height="auto" justify="space-between">
                <ColumnBlock margin="0px">
                  <InputBlockDiv statement>
                    <label htmlFor={id + "dateDeath"}>Дата смерти</label>
                    <Field type="date" name="date" id={id + "dateDeath"} />
                    <ErrorMessage name="date" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "dateDeath"}>Амбулаторная карта умершего (.pdf)</label>
                    <Field
                      type="file"
                      name="dateDeath"
                      id={id + "dateDeath"}
                      onChange={(e: any) => setFileUpload(e.target.files[0])}
                      accept="application/pdf"
                    />
                    <ErrorFile display={errorFile}>Неверный формат файла</ErrorFile>
                    <DownloadFileCheck display={downloadFileCheck}>Загрузка, подождите...</DownloadFileCheck>
                    <ErrorMessage name="dateDeath" component="div" />
                  </InputBlockDiv>
                </ColumnBlock>
              </Window>
              <Button name={"Далее"} />
            </FormBlock>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DeathSpec;
