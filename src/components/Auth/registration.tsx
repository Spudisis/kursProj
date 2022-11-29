import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormBlock } from "../../componentStyled/Form/Form";
import { Window } from "../../componentStyled/window";
import { InputBlockDiv } from "../../componentStyled/Form/InputBlock";
import { ButtonGeneral } from "../../componentStyled/button";
import { BlockButtons } from "../../componentStyled/Form/blockButtons";

const Registation = ({ setData }: any) => {
  const id = React.useId();
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", passwordRepeat: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Обязательное поле";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Неправильный Email";
          }
          if (values.password.length < 6) {
            errors.password = "Пароль должен быть не менее 6-х символов";
          }
          if (values.password !== values.passwordRepeat) {
            errors.passwordRepeat = "Пароли не совпадают";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setData(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormBlock>
              <Window direction={"column"} height="auto" justify="stretch">
                <InputBlockDiv auth>
                  <label htmlFor={id + "email"}>Email</label>
                  <Field type="email" name="email" id={id + "email"} placeholder="Логин" />
                  <ErrorMessage name="email" component="div" />
                </InputBlockDiv>
                <InputBlockDiv auth>
                  <label htmlFor={id + "password"}>Password</label>
                  <Field type="password" name="password" id={id + "password"} placeholder="Пароль" />
                  <ErrorMessage name="password" component="div" />
                </InputBlockDiv>
                <InputBlockDiv auth>
                  <label htmlFor={id + "passwordRepeat"}>Repeat password</label>
                  <Field
                    type="password"
                    name="passwordRepeat"
                    id={id + "passwordRepeat"}
                    placeholder="Повторите пароль"
                  />
                  <ErrorMessage name="passwordRepeat" component="div" />
                </InputBlockDiv>
              </Window>
              <BlockButtons>
                <ButtonGeneral type="submit">Зарегистрироваться</ButtonGeneral>
              </BlockButtons>
            </FormBlock>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Registation;
