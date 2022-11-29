import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const BlockButton = styled.div`
  display: flex;
  justify-content: ${({ justify }: blockButton) => justify || "center"};
  padding: 20px 0px 0px 0px;
`;
export const BlockButtons = (props: any) => {
  return <BlockButton {...props}></BlockButton>;
};

type blockButton = {
  display: String;
  align: String;
  justify: String;
  height: string;
  direction: String;
  auth: boolean;
};
