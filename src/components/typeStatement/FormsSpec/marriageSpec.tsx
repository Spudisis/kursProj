import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormBlock } from "../../../componentStyled/Form/Form";
import { Button } from "../button";
import { Window } from "../../../componentStyled/window";
import { InputBlockDiv } from "../../../componentStyled/Form/InputBlock";
import { ColumnBlock } from "../../../componentStyled/Form/column";

const MarriageSpec = ({ status, info, numberForm }: any) => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{
          lastDocM: "Отсутствует",
          lastDocW: "Отсутствует",
          familyM: "",
          familyW: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.lastDocM) {
            errors.lastDocM = "Обязательное поле";
          }
          if (!values.lastDocW) {
            errors.lastDocW = "Обязательное поле";
          }
          if (!values.familyM) {
            errors.familyM = "Обязательное поле";
          }
          if (!values.familyW) {
            errors.familyW = "Обязательное поле";
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
                  <h2>Для него</h2>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "lastDocM"}>Предыдущий брак</label>
                    <Field type="text" name="lastDocM" id={id + "lastDocM"} placeholder="Наличие" />
                    <ErrorMessage name="lastDocM" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "familyM"}>Присвоить фамилию</label>
                    <Field type="text" name="familyM" id={id + "familyM"} placeholder="Фамилия" />
                    <ErrorMessage name="familyM" component="div" />
                  </InputBlockDiv>
                </ColumnBlock>
                <ColumnBlock>
                  <h2>Для неё</h2>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "lastDocW"}>Предыдущий брак</label>
                    <Field type="text" name="lastDocW" id={id + "lastDocW"} placeholder="Наличие" />
                    <ErrorMessage name="lastDocW" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "familyW"}>Присвоить фамилию</label>
                    <Field type="text" name="familyW" id={id + "familyW"} placeholder="Фамилия" />
                    <ErrorMessage name="familyW" component="div" />
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

export default MarriageSpec;
