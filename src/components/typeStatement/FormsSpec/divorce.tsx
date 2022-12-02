import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormBlock } from "../../../componentStyled/Form/Form";
import { Button } from "../button";
import { Window } from "../../../componentStyled/window";
import { InputBlockDiv } from "../../../componentStyled/Form/InputBlock";
import { ColumnBlock } from "../../../componentStyled/Form/column";

const DivorceSpec = ({ numberForm, status, info }: any) => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{
          familyM: "",
          familyW: "",
        }}
        validate={(values) => {
          const errors: any = {};

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
                    <label htmlFor={id + "familyM"}>Присвоить фамилию</label>
                    <Field type="text" name="familyM" id={id + "familyM"} placeholder="Фамилия" />
                    <ErrorMessage name="familyM" component="div" />
                  </InputBlockDiv>
                </ColumnBlock>
                <ColumnBlock>
                  <h2>Для неё</h2>
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

export { DivorceSpec };
