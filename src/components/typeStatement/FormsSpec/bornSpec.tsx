import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { UploadImg } from "../../../firebase/addFile";
import { useSelector } from "react-redux";
import { getUid } from "../../../store/slices/slice";
import { v4 as uuidv4 } from "uuid";
import { FormBlock } from "../../../componentStyled/Form/Form";
import { Window } from "../../../componentStyled/window";
import { InputBlockDiv } from "../../../componentStyled/Form/InputBlock";
import { BlockButtons } from "../../../componentStyled/Form/blockButtons";
import { ButtonGeneral } from "../../../componentStyled/button";
import { Button } from "../button";
import { ColumnBlock } from "../../../componentStyled/Form/column";
import styled from "styled-components";

const RadioButtons = styled.div`
  display: flex;
  color: black;
`;

export const ErrorFile = styled.div`
  display: ${({ display }: any) => display};
`;
export const DownloadFileCheck = styled.div`
  display: ${({ display }: any) => display};
`;
const BornSpec = ({ numberForm, status, info }: any) => {
  const id = React.useId();
  const [errorFile, setErrorFile] = React.useState("none");
  const { uid } = useSelector(getUid);
  const [fileUpload, setFileUpload] = React.useState("" as any);
  const [downloadFileCheck, setDownloadFileCheck] = React.useState("none");
  const JSJoda = require("@js-joda/core");
  let LocalDate = JSJoda.LocalDate;

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
          } else {
            const start_date = new LocalDate.parse(values.dateBorn);

            if (JSJoda.ChronoUnit.DAYS.between(start_date, LocalDate.now()) < 0) {
              errors.dateBorn = "Неверная дата";
            }
          }
          if (!values.FIO) {
            errors.FIO = "Обязательно к заполнению";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setFieldValue }) => {
          let { name } = fileUpload;

          await UploadImg({ fileUpload, uid, status, numberForm, info, values, setErrorFile, setDownloadFileCheck });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormBlock>
              <Window height="auto" justify="space-between">
                <ColumnBlock margin="0px">
                  <h2>Ребёнок</h2>
                  <InputBlockDiv radios role="group" justify="space-between" align="center" direction="row">
                    <p>Пол ребёнка</p>
                    <RadioButtons>
                      <InputBlockDiv radio direction="row" align="center">
                        <label htmlFor={id + "sex"}>Mужской</label>
                        <Field type="radio" name="sex" id={id + "sex"} value="М" />
                      </InputBlockDiv>
                      <InputBlockDiv radio direction="row" align="center">
                        <label htmlFor={id + "sex2"}>Женский</label>
                        <Field type="radio" name="sex" id={id + "sex2"} value="W" />
                      </InputBlockDiv>
                      <ErrorMessage name="sex" component="div" />
                    </RadioButtons>
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "dateBorn"}>Дата рождения ребёнка</label>
                    <Field type="date" name="dateBorn" id={id + "dateBorn"} />
                    <ErrorMessage name="dateBorn" component="div" />
                  </InputBlockDiv>

                  <InputBlockDiv statement>
                    <label htmlFor={id + "FIO"}>Фамилия Имя Отчество</label>
                    <Field type="text" name="FIO" id={id + "FIO"} placeholder="ФИО" />
                    <ErrorMessage name="FIO" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "dfh"}>Свидетельство рождения ребенка (.pdf)</label>
                    <Field
                      type="file"
                      name="gggg"
                      id={id + "dfh"}
                      accept="application/pdf"
                      onChange={(e: any) => setFileUpload(e.target.files[0])}
                    />
                    <ErrorFile display={errorFile}>Неверный формат файла</ErrorFile>
                    <DownloadFileCheck display={downloadFileCheck}>Загрузка, подождите...</DownloadFileCheck>
                    <ErrorMessage name="FIO" component="div" />
                  </InputBlockDiv>
                  <h2>Свидетельство об установлении отцовства</h2>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "fatherAct"}>Запись акта №</label>
                    <Field type="text" name="fatherAct" id={id + "fatherAct"} placeholder="Номер" />
                    <ErrorMessage name="fatherAct" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "fatherActDate"}>Дата</label>
                    <Field type="date" name="fatherActDate" id={id + "fatherActDate"} />
                    <ErrorMessage name="fatherActDate" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "fatherNameAct"}>Наименование органа ЗАГС</label>
                    <Field type="text" name="fatherNameAct" id={id + "fatherNameAct"} placeholder="ЗАГС" />
                    <ErrorMessage name="fatherNameAct" component="div" />
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

export default BornSpec;
