import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const DivWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  width: 100%;
  ${(props: wrapper) =>
    props.flex &&
    css`
      display: ${({ display }: wrapper) => display || "flex"};
      justify-content: ${({ justify }: wrapper) => justify || "space-between"};
      align-items: ${({ align }: wrapper) => align || "center"};
    `}
`;
export const MainDiv = (props: any) => {
  return <DivWrapper {...props} />;
};
type wrapper = {
  flex: any;
  display: String;
  justify: String;
  align: String;
};
