import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormBlock } from "../../componentStyled/Form/Form";
import { Window } from "../../componentStyled/window";
import { InputBlockDiv } from "../../componentStyled/Form/InputBlock";
import { ColumnBlock } from "../../componentStyled/Form/column";
import { Button } from "./button";
const PassportInfo = ({ statement, numberForm, status, info, necessarily }: any) => {
  const id = React.useId();
  const JSJoda = require("@js-joda/core");
  let LocalDate = JSJoda.LocalDate;

  return (
    <>
      <Formik
        initialValues={{
          nameDocM: "Паспорт РФ",
          serPasM: "",
          numPasM: "",
          orgPasM: "",
          datePasM: "",
          nameDocW: "Паспорт РФ",
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
            } else {
              const start_date = new LocalDate.parse(values.datePasM);

              if (JSJoda.ChronoUnit.DAYS.between(start_date, LocalDate.now()) < 0) {
                errors.datePasM = "Неверная дата";
              }
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
          } else {
            const start_date = new LocalDate.parse(values.datePasW);

            if (JSJoda.ChronoUnit.DAYS.between(start_date, LocalDate.now()) < 0) {
              errors.datePasW = "Неверная дата";
            }
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          info(values);
          status(numberForm);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormBlock>
              {statement === "death" ? "" : <h2>Паспортные данные</h2>}
              <Window height="auto" justify="space-between">
                <ColumnBlock margin="0px">
                  {statement === "death" ? <h2>Паспортные данные умершего</h2> : ""}
                  <Window height="auto" justify="stretch" direction="column" width="400px">
                    <InputBlockDiv statement>
                      <label htmlFor={id + "nameDocM"}>Наименование документа</label>
                      <Field
                        type="text"
                        name="nameDocM"
                        values={"Паспорт РФ"}
                        id={id + "nameDocM"}
                        placeholder="Документ"
                      />
                      <ErrorMessage name="nameDocM" component="div" />
                    </InputBlockDiv>

                    <InputBlockDiv statement>
                      <label htmlFor="serPasM">Серия</label>
                      <Field type="number" name="serPasM" id={id + "serPasM"} placeholder="Серия" />
                      <ErrorMessage name="serPasM" component="div" />
                    </InputBlockDiv>
                    <InputBlockDiv statement>
                      <label htmlFor={id + "numPasM"}>№</label>
                      <Field type="number" name="numPasM" id={id + "numPasM"} placeholder="Номер" />
                      <ErrorMessage name="numPasM" component="div" />
                    </InputBlockDiv>

                    <InputBlockDiv statement>
                      <label htmlFor={id + "orgPasM"}>Наименование органа</label>
                      <Field type="text" name="orgPasM" id={id + "orgPasM"} placeholder="Кем выдан" />
                      <ErrorMessage name="orgPasM" component="div" />
                    </InputBlockDiv>
                    <InputBlockDiv statement>
                      <label htmlFor={id + "datePasM"}>Дата выдачи документа</label>
                      <Field type="date" name="datePasM" id={id + "datePasM"} />
                      <ErrorMessage name="datePasM" component="div" />
                    </InputBlockDiv>
                  </Window>
                </ColumnBlock>
                <ColumnBlock>
                  {statement === "death" ? <h2>Паспортные данные заявителя</h2> : ""}
                  <Window height="auto" justify="stretch" direction="column" width="400px">
                    <InputBlockDiv statement>
                      <label htmlFor={id + "nameDocW"}>Наименование документа</label>
                      <Field
                        type="text"
                        name="nameDocW"
                        values={"Паспорт РФ"}
                        id={id + "nameDocW"}
                        placeholder="Документ"
                      />
                      <ErrorMessage name="nameDocW" component="div" />
                    </InputBlockDiv>

                    <InputBlockDiv statement>
                      <label htmlFor="serPasW">Серия</label>
                      <Field type="number" name="serPasW" id={id + "serPasW"} placeholder="Серия" />
                      <ErrorMessage name="serPasW" component="div" />
                    </InputBlockDiv>
                    <InputBlockDiv statement>
                      <label htmlFor={id + "numPasW"}>№</label>
                      <Field type="number" name="numPasW" id={id + "numPasW"} placeholder="Номер" />
                      <ErrorMessage name="numPasW" component="div" />
                    </InputBlockDiv>

                    <InputBlockDiv statement>
                      <label htmlFor={id + "orgPasW"}>Наименование органа</label>
                      <Field type="text" name="orgPasW" id={id + "orgPasW"} placeholder="Кем выдан" />
                      <ErrorMessage name="orgPasW" component="div" />
                    </InputBlockDiv>
                    <InputBlockDiv statement>
                      <label htmlFor={id + "datePasW"}>Дата выдачи документа</label>
                      <Field type="date" name="datePasW" id={id + "datePasW"} />
                      <ErrorMessage name="datePasW" component="div" />
                    </InputBlockDiv>
                  </Window>
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

export default PassportInfo;
