import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormBlock } from "../../../componentStyled/Form/Form";
import { Button } from "../button";
import { Window } from "../../../componentStyled/window";
import { InputBlockDiv } from "../../../componentStyled/Form/InputBlock";

const DateVisited = ({ numberForm, status, info, setEnd }: any) => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{
          dateVisited: "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.dateVisited) {
            errors.dateVisited = "Обязательное поле";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values.dateVisited);

          status(numberForm);
          info(values);
          setEnd(true);
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormBlock>
              <Window height="auto" justify="space-between">
                <Window height="auto" justify="stretch" direction="column" width="400px">
                  <InputBlockDiv statement>
                    <label htmlFor={id + "dateVisited"}>Дата посещения</label>
                    <Field type="date" name="dateVisited" id={id + "dateVisited"} />
                    <ErrorMessage name="dateVisited" component="div" />
                  </InputBlockDiv>
                </Window>
              </Window>
              <Button name={"Отправить заявление"} />
            </FormBlock>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DateVisited;
