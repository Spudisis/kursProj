import React from "react";
import styled from "styled-components";
const Logo = styled.div`
  width: auto;
  height: 90%;
  margin-left: 10px;
  img {
    width: 4.5vh;
    height: auto;
    margin-left: 10px;
  }
`;
export const LogoDiv = (props: any) => {
  return <Logo {...props} />;
};
