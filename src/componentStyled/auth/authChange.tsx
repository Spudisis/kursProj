import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const ButtonSwap = styled.button`
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: inherit;
  color: white;
  ${(props: wrapper) =>
    props.swap &&
    css`
      color: ${({ color }: wrapper) => color || "gold"};
    `}
`;
export const AuthButtonSwap = (props: any) => {
  return <ButtonSwap {...props} />;
};
type wrapper = {
  color: string;
  swap: boolean;
};
