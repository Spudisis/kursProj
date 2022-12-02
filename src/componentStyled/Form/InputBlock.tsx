import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const BlockInput = styled.div`
  display: flex;
  flex-direction: ${({ direction }: inputs) => direction || "column"};
  align-items: ${({ align }: inputs) => align || "flex-start"};
  height: ${({ height }: inputs) => height || "80px"};
  margin: ${({ margin }: inputs) => margin || "0px"};

  ${(props: inputs) =>
    props.auth &&
    css`
      input {
        width: 300px;
        height: 30px;
        border-radius: 10px;
        outline: none;
        border: none;
        padding-left: 10px;
        @media screen and (max-width: 425px) {
          width: 200px;
        }
      }
      label {
        padding-left: 5px;
      }
      div {
        font-size: 12px;
        font-weight: 300;
        color: rgb(213, 49, 43);
      }
    `}
  ${(props: inputs) =>
    props.statement &&
    css`
      padding: 20px 0px 0px;
      position: relative;
      label {
        font-size: 20px;
        width: 400px;
        color: rgb(45, 30, 183);
      }
      input {
        font-size: 16px;
        width: 400px;
        border: 0px;
        outline: none;
        border-bottom: 1px solid black;
      }
      div {
        position: absolute;
        font-size: 12px;
        color: red;
        left: 0px;
        top: 77px;
      }
    `}
     ${(props: inputs) =>
    props.radios &&
    css`
    color: 
      display: flex;
      position: relative;
      color:rgb(45, 30, 183);
      p {
        font-size: 25px;
      }
    `}
    ${(props: inputs) =>
    props.radio &&
    css`
      margin-left: 20px;
      font-size: 20px;
    `}
    ${(props: inputs) =>
    props.change &&
    css`
      
      label {
        font-size: 20px;
        width: 200px;
        color: rgb(45, 30, 183);
      }
      input {
        font-size: 16px;
        width: 200px;
        border 1px solid gray;
        border-radius:10px;
        outline: none;
      }
      div {
        position: absolute;
        font-size: 12px;
        color: red;
        left: 0px;
        top: 77px;
      }
    `}
    ${(props: inputs) =>
    props.pay &&
    css`
      margin-bottom: 30px;
      position: relative;
      label {
        padding-bottom: 5px;
        font-size: 13px;
        width: 100%;
      }
      input {
        box-sizing: border-box;
        width: 200px;
        border: ${({ border }: inputs) => border || "1px solid #dcdcdc"};
        border-radius: 3px;
        margin-top: 3px;
        padding: 15px;
        font-size: 16px;
      }
      div {
        position: absolute;
        font-size: 12px;
        color: red;
        left: 0px;
        top: 83px;
      }
    `}
`;
export const InputBlockDiv = (props: any) => {
  return <BlockInput {...props}></BlockInput>;
};

type inputs = {
  display: String;
  align: String;
  justify: String;
  height: string;
  direction: String;
  auth: boolean;
  statement: boolean;
  radios: boolean;
  radio: boolean;
  change: boolean;
  margin: string;
  pay: boolean;
  border: string;
};
