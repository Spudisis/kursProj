import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const BlockInput = styled.div`
  display: flex;
  flex-direction: ${({ direction }: inputs) => direction || "column"};
  align-items: ${({ align }: inputs) => align || "flex-start"};
  height: ${({ height }: inputs) => height || "80px"};

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
};
