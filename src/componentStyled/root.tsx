import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const DivRoot = styled.div`
  display: flex;
  flex-direction: ${({ direction }: wrapper) => direction || "column"};
  justify-content: ${({ justify }: wrapper) => justify || "space-between"};
  background-color: ${({ bgc }: wrapper) => bgc || "hsl(217, 51%, 27%);"};
  min-height: ${({ height }: wrapper) => height || "45vh"};
  color: ${({ color }: wrapper) => color || "white"};
  align-items: ${({ align }: wrapper) => align || "stretch"};
  ${(props: wrapper) =>
    props.auth &&
    css`
      border-radius: 25px;
      padding: 20px 20px;
      position: relative;
      align-items: center;
      @media screen and (max-width: 425px) {
        width: 100%;
      }
    `}
  img {
    height: 100px;
    width: auto;
    margin: 0 auto;
  }
`;
export const Root = (props: any) => {
  return <DivRoot {...props} />;
};
type wrapper = {
  direction: string;
  display: string;
  justify: string;
  align: string;
  bgc: string;
  auth: boolean;
  height: string;
  color: string;
};
