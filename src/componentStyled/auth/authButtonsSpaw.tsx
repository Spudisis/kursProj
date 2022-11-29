import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const Buttons = styled.div`
  display: flex;
  align-items: center;
  & > button:hover {
    transform: scale(1.05);
  }
`;
export const ButtonsSwap = (props: any) => {
  return <Buttons {...props} />;
};
