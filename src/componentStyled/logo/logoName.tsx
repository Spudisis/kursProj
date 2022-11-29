import React from "react";
import styled from "styled-components";
const Name = styled.div`
  margin-left: 10px;
  margin: auto 10px;
  color: white;
  width: 100%;
  font-size: 10px;
  text-align: center;
  h1:last-child {
    display: none;
  }

  @media screen and (max-width: 560px) {
    h1:first-child {
      display: none;
    }
    h1:last-child {
      display: block;
    }
  }
`;
export const LogoName = (props: any) => {
  return <Name {...props} />;
};
