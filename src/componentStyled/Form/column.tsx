import React from "react";
import styled from "styled-components";
const Column = styled.div`
  margin-left: ${({ margin }: any) => margin || "100px"};
`;
export const ColumnBlock = (props: any) => {
  return <Column {...props}></Column>;
};
