import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const ButtonHead = styled.button`
  display: none;
  margin: 0px 10px;
  background-color: inherit;
  border: 0px;
  outline: 0px;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  img {
    filter: invert(100%);
  }
  @media screen and (max-width: 968px) {
    display: block;
  }
`;
export const ButtonHeader = (props: any) => {
  return <ButtonHead ref={props.innerRef} {...props} />;
};
