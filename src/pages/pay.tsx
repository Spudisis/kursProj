import React from "react";
import { useParams } from "react-router-dom";
import { Window } from "../componentStyled/window";
import cart from "../assets/img/cart.jfif";
import styled from "styled-components";
import { FormBlock } from "../componentStyled/Form/Form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ColumnBlock } from "../componentStyled/Form/column";
import { InputBlockDiv } from "../componentStyled/Form/InputBlock";
import { Button } from "../components/typeStatement/button";
import { useAppDispatch } from "../redux/store";
import { addPay, getdata } from "../redux/slices/getData";
import { useSelector } from "react-redux";
import { Loader } from "../components/loader/loader";
import { NotFound } from "./NotFound";
const Text = styled.div`
  margin-bottom: 30px;
  p {
    text-align: center;
    font-size: 25px;
  }
`;

export const Pay = () => {
  const { id } = useParams();
  const idForm = React.useId();
  const dispatch = useAppDispatch();
  const [numberCheck, setNumber] = React.useState("");
  const [cvvCheck, setCvv] = React.useState("");
  const [checkData, setCheckData] = React.useState("loading");
  const [error1, setError1] = React.useState("");
  const [error2, setError2] = React.useState("");
  const [error3, setError3] = React.useState("");
  const [error4, setError4] = React.useState("");

  const { data } = useSelector(getdata);

  React.useEffect(() => {
    if (checkData === "loading") {
      setCheckData("error");
    }
    data.forEach((element: any) => {
      console.log(element.id);
      if (element.id == id && element.pay !== true) {
        setCheckData("success");
      }
    });
  }, [data]);
  return (
    <Window height="80vh" justify="center" direction="column" align="center">
      {checkData === "loading" ? (
        <Loader />
      ) : checkData === "success" ? (
        <>
          <Text>
            <p>
              Оплата госпошлины: <b>400 рублей</b> <br></br>Оплатить можно на сайте или по месту получения
            </p>
          </Text>
          <Window pay height="auto">
            <Formik
              initialValues={{
                Number: "",
                date: "",
                cvv: "",
                person: "",
              }}
              validate={(values) => {
                const errors: any = {};

                if (!values.Number) {
                  errors.Number = "Обязательно к заполнению";
                }
                if (!values.cvv) {
                  errors.cvv = "Обязательно к заполнению";
                }
                if (/[0-9]{3}^$/.test(values.cvv)) {
                  console.log(/[0-9]{3}/.test(values.cvv));
                  errors.cvv = "3-значное";
                }
                if (!values.date) {
                  errors.date = "Обязательно к заполнению";
                }

                if (!values.person) {
                  errors.person = "Обязательно к заполнению";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                id && dispatch(addPay(+id));
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <FormBlock>
                    <Window height="auto" justify="space-between">
                      <img src={cart} alt="cart" />
                      <ColumnBlock margin="0px">
                        <InputBlockDiv border={error1} pay width="200px">
                          <label htmlFor={idForm + "Number"}>Номер</label>
                          <Field
                            type="number"
                            name="Number"
                            // onChange={(n: any) => {
                            //   if (/^[\d-]*$/.test(n.target.value) && n.target.value.length !== 20) {
                            //     setError1("");
                            //     if (
                            //       n.target.value.length === 4 ||
                            //       n.target.value.length === 9 ||
                            //       n.target.value.length === 14
                            //     ) {
                            //       return setNumber(n.target.value + "-");
                            //     }
                            //     setNumber(n.target.value);
                            //   }
                            // }}
                            // value={numberCheck}
                            id={idForm + "marriedAct"}
                            placeholder="****-****-****-****"
                          />
                          <ErrorMessage name="Number" component="div" />
                        </InputBlockDiv>
                        <InputBlockDiv border={error2} pay width="200px">
                          <label htmlFor={idForm + "date"}>ММ/ДД</label>
                          <Field type="number" name="date" id={idForm + "date"} placeholder="**/**" />
                          <ErrorMessage name="date" component="div" />
                        </InputBlockDiv>
                      </ColumnBlock>
                      <ColumnBlock margin="0px">
                        <InputBlockDiv border={error3} pay width="200px">
                          <label htmlFor={idForm + "cvv"}>CVV</label>
                          <Field
                            type="number"
                            // onChange={(n: any) => {
                            //   if (n.target.value.length !== 4) {
                            //     setCvv(n.target.value);
                            //   }
                            // }}
                            name="cvv"
                            // value={cvvCheck}
                            id={idForm + "cvv"}
                            placeholder="***"
                          />
                          <ErrorMessage name="cvv" component="div" />
                        </InputBlockDiv>
                        <InputBlockDiv border={error4} pay width="200px">
                          <label htmlFor={idForm + "person"}>Имя</label>
                          <Field type="text" name="person" id={idForm + "person"} placeholder="Cart Holder" />
                          <ErrorMessage name="person" component="div" />
                        </InputBlockDiv>
                      </ColumnBlock>
                    </Window>
                    <Button name={"Оплатить"} />
                  </FormBlock>
                </Form>
              )}
            </Formik>
          </Window>
        </>
      ) : (
        <NotFound />
      )}
    </Window>
  );
};
