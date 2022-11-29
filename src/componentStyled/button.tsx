import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Button = styled.button`
  height: ${({ height }: button) => height || "50px"};
  border-radius: ${({ radius }: button) => radius || "15px"};
  outline: none;
  border: ${({ border }: button) => border || "none"};
  color: ${({ color }: button) => color || "white"};
  padding: ${({ padding }: button) => padding || "0px 10px"};
  font-weight: 600;
  font-size: ${({ size }: button) => size || "18px"};
  background-color: ${({ bgc }: button) => bgc || "hsl(207, 62%, 56%)"};
  cursor: pointer;
  min-width: ${({ width }: button) => width || "80%"};
  margin: ${({ margin }: button) => margin || "0px"};
  &:hover {
    background-color: hsl(207, 96%, 66%);
  }
  ${(props: button) =>
    props.cart &&
    css`
      border-radius: 15px;
      border: none;
      text-align: center;
      font-size: 15px;
      padding: 5px 10px;
      cursor: pointer;
      &:hover {
        background-color: hsl(217, 57%, 15%);
      }
      @media screen and (max-width: 380px) {
        min-width: 100px;
        font-size: 14px;
      }
    `}
`;
export const ButtonGeneral = (props: any) => {
  return <Button {...props}></Button>;
};

type button = {
  height: string;
  radius: string;
  border: string;
  color: string;
  padding: string;
  size: string;
  width: string;
  bgc: string;
  cart: boolean;
  margin: string;
};
