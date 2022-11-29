import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const WarningSwap = styled.div`
  display: none;
  ${(props: wrapper) =>
    props.swap &&
    css`
      display: block;
      position: absolute;
      bottom: -80px;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 220px;
      line-height: 50px;
      height: 50px;
      background-color: rgb(93, 15, 15);
      border-radius: 15px;
      color: white;
      text-align: center;
    `}
`;
export const AuthWarningSwap = (props: any) => {
  return <WarningSwap {...props} />;
};
type wrapper = {
  swap: boolean;
};
