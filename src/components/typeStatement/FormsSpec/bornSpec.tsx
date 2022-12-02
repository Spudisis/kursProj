import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { UploadImg } from "../../../firebase/addFile";
import { useSelector } from "react-redux";
import { getUid } from "../../../redux/slices/slice";
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
          
          UploadImg({ fileUpload, uid });

          info({ name, ...values });
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
                    <label htmlFor={id + "fileBorn"}>Свидетельство рождения ребенка</label>
                    <Field
                      type="file"
                      name="fileBorn"
                      id={id + "fileBorn"}
                      placeholder="ФИО"
                      onChange={(e: any) => setFileUpload(e.target.files[0])}
                    />
                    <ErrorMessage name="fileBorn" component="div" />
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
