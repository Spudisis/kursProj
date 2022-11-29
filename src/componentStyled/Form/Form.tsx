import React from "react";
import styled from "styled-components";
const Form = styled.div`
  padding: 20px 0px 0px;
  color: ${({ color }: list) => color || "flex"};
  display: ${({ display }: list) => display || "flex"};
  flex-direction: ${({ direction }: list) => direction || "column"};
  justify-content: ${({ justify }: list) => justify || "space-between"};
  align-items: ${({ align }: list) => align || "stretch"};
  height: ${({ height }: list) => height || "100%"};
  h2 {
    padding-left: 10px;
  }
`;
export const FormBlock = (props: any) => {
  return <Form {...props}></Form>;
};

type list = {
  height: string;
  color: string;
  display: String;
  align: String;
  justify: String;
  direction: String;
};
