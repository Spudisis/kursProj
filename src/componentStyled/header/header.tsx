import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const Header = styled.header`
  background-color: hsl(217, 57%, 15%);
`;
export const HeaderBlock = (props: any) => {
  return <Header {...props} />;
};
