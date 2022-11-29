import React from "react";
import styled from "styled-components";
const Place = styled.div`
  height: 5vh;
  display: flex;
  justify-content: left;
`;
export const LogoPlace = (props: any) => {
  return <Place {...props} />;
};
