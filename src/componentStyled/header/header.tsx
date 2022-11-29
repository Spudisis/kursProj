import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const Header = styled.header`
  background-color: hsl(217, 57%, 15%);
  height: 5vh;
`;
export const HeaderBlock = (props: any) => {
  return <Header {...props} />;
};
