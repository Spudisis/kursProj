import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormBlock } from "../../componentStyled/Form/Form";
import { Window } from "../../componentStyled/window";
import { ColumnBlock } from "../../componentStyled/Form/column";
import { InputBlockDiv } from "../../componentStyled/Form/InputBlock";
import { ButtonGeneral } from "../../componentStyled/button";
import { BlockButtons } from "../../componentStyled/Form/blockButtons";
import { Button } from "./button";

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
          <Form>
            <FormBlock>
              <Window height="auto" justify="space-between">
                <ColumnBlock margin="0px">
                  {type === "born" && <h2>Свидетельство о заключении брака (если есть)</h2>}
                  {type === "divorce" && <h2>Свидетельство о заключении брака</h2>}
                  <InputBlockDiv statement>
                    <label htmlFor={id + "marriedAct"}>Запись акта брака №</label>
                    <Field type="text" name="marriedAct" id={id + "marriedAct"} placeholder="Номер" />
                    <ErrorMessage name="marriedAct" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "marriedDate"}>Дата заключения брака</label>
                    <Field type="date" name="marriedDate" id={id + "marriedDate"} />
                    <ErrorMessage name="marriedDate" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "marriedNamePlace"}>Наименование органа ЗАГС</label>
                    <Field type="text" name="marriedNamePlace" id={id + "marriedNamePlace"} placeholder="ЗАГС" />
                    <ErrorMessage name="marriedNamePlace" component="div" />
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

export { ActZags };
