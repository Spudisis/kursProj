import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useSelector } from "react-redux";
import { getUid } from "../../../redux/slices/slice";
import { UploadImg } from "../../../firebase/addFile";
import { v4 as uuidv4 } from "uuid";
import { FormBlock } from "../../../componentStyled/Form/Form";
import { Button } from "../button";
import { Window } from "../../../componentStyled/window";
import { InputBlockDiv } from "../../../componentStyled/Form/InputBlock";
import { ColumnBlock } from "../../../componentStyled/Form/column";

const DeathSpec = ({ numberForm, status, info }: any) => {
  const { uid } = useSelector(getUid);
  const [fileUpload, setFileUpload] = React.useState("" as any);

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
            errors.sex = "Обязательно к заполнению";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
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
                  <InputBlockDiv statement>
                    <label htmlFor={id + "dateDeath"}>Дата смерти</label>
                    <Field type="date" name="date" id={id + "dateDeath"} />
                    <ErrorMessage name="date" component="div" />
                  </InputBlockDiv>
                  <InputBlockDiv statement>
                    <label htmlFor={id + "dateDeath"}>Амбулаторной карты умершего</label>
                    <Field
                      type="file"
                      name="dateDeath"
                      id={id + "dateDeath"}
                      onChange={(e: any) => setFileUpload(e.target.files[0])}
                    />
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
