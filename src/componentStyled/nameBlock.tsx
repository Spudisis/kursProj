import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const Name = styled.h2`
  margin-top: 40px;
  font-size: 30px;
  text-align: left;
  margin-bottom: 30px;
`;
export const NameBlock = (props: any) => {
  return <Name {...props} />;
};
