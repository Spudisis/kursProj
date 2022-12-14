import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormBlock } from "../../componentStyled/Form/Form";
import { ColumnBlock } from "../../componentStyled/Form/column";
import { Window } from "../../componentStyled/window";
import { BlockButtons } from "../../componentStyled/Form/blockButtons";
import { ButtonGeneral } from "../../componentStyled/button";
import { InputBlockDiv } from "../../componentStyled/Form/InputBlock";
import { Button } from "./button";

const GeneralInfo = ({ statement, numberForm, status, info, necessarily }: any) => {
  const id = React.useId();

  const JSJoda = require("@js-joda/core");
  let LocalDate = JSJoda.LocalDate;

  return (
    <>
      <Formik
        initialValues={{
          fioM: "",
          birthdayM: "",
          birthdayPlaceM: "",
          nationalityM: "Российское",
          nationalM: "",
          placeLiveM: "",
          fioW: "",
          birthdayW: "",
          birthdayPlaceW: "",
          nationalityW: "Российское",
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
            } else {
              const start_date = new LocalDate.parse(values.birthdayM);

              if (JSJoda.ChronoUnit.DAYS.between(start_date, LocalDate.now()) < 0) {
                errors.birthdayM = "Неверная дата";
              }
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
          } else {
            const start_date = new LocalDate.parse(values.birthdayW);

            if (JSJoda.ChronoUnit.DAYS.between(start_date, LocalDate.now()) < 0) {
              errors.birthdayW = "Неверная дата";
            }
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
          <Form>
            <FormBlock>
              <Window height="auto" justify="space-between">
                <ColumnBlock margin="0px">
                  {statement === "death" ? <h2>Данные умершего</h2> : <h2>Для него</h2>}
                  <InputBlockDiv statement>
                    <label htmlFor={id + "fioM"}>Фамилия Имя Отчество</label>
                    <Field type="text" name="fioM" id={id + "fioM"} placeholder="ФИО" />
                    <ErrorMessage name="fioM" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "birthdayM"}>Дата рождения</label>
                    <Field type="date" name="birthdayM" id={id + "birthdayM"} />
                    <ErrorMessage name="birthdayM" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "birthdayPlaceM"}>Место рождения </label>
                    <Field type="text" name="birthdayPlaceM" id={id + "birthdayPlaceM"} placeholder="Город" />
                    <ErrorMessage name="birthdayPlaceM" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "nationalityM"}>Гражданство</label>
                    <Field
                      type="text"
                      values={"Российское"}
                      name="nationalityM"
                      id={id + "nationalityM"}
                      placeholder="Гражданство"
                    />
                    <ErrorMessage name="nationalityM" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "nationalM"}>Национальность</label>
                    <Field type="text" name="nationalM" id={id + "nationalM"} placeholder="Национальность" />
                    <ErrorMessage name="nationalM" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "placeLiveM"}>Место жительства</label>
                    <Field type="text" name="placeLiveM" id={id + "placeLiveM"} placeholder="Место жительства" />
                    <ErrorMessage name="placeLiveM" component="div" />
                  </InputBlockDiv>
                </ColumnBlock>

                <ColumnBlock>
                  {statement === "death" ? <h2>Данные заявителя</h2> : <h2>Для неё</h2>}
                  <InputBlockDiv statement>
                    <label htmlFor={id + "fioW"}>Фамилия Имя Отчество</label>
                    <Field type="text" name="fioW" id={id + "fioW"} placeholder="ФИО" />
                    <ErrorMessage name="fioW" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "birthdayW"}>Дата рождения</label>
                    <Field type="date" name="birthdayW" id={id + "birthdayW"} />
                    <ErrorMessage name="birthdayW" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "birthdayPlaceW"}>Место рождения</label>
                    <Field type="text" name="birthdayPlaceW" id={id + "birthdayPlaceW"} placeholder="Место рождения" />
                    <ErrorMessage name="birthdayPlaceW" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "nationalityW"}>Гражданство</label>
                    <Field type="text" name="nationalityW" id={id + "nationalityW"} placeholder="Гражданство" />
                    <ErrorMessage name="nationalityW" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "nationalW"}>Национальность</label>
                    <Field type="text" name="nationalW" id={id + "nationalW"} placeholder="Национальность" />
                    <ErrorMessage name="nationalW" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "placeLiveW"}>Место жительства</label>
                    <Field type="text" name="placeLiveW" id={id + "placeLiveW"} placeholder="Место жительства" />
                    <ErrorMessage name="placeLiveW" component="div" />
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

export default GeneralInfo;
