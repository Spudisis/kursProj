import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const Wrapper = styled.div`
  min-height: ${({ height }: styles) => height || "100vh"};
  display: flex;
  flex-direction: ${({ direction }: styles) => direction || "row"};
  justify-content: ${({ justify }: styles) => justify || "space-between"};
  align-items: ${({ align }: styles) => align || "stretch"};
  ${(props: styles) =>
    props.bgc &&
    css`
      @media screen and (max-width: 425px) {
        background-color: hsl(217, 51%, 27%);
      }
    `}
  ${(props: styles) =>
    props.footer &&
    css`
      p {
        margin-left: 10px;
        text-align: center;
      }
      @media screen and (max-width: 768px) {
        p {
          margin-top: 10px;
        }
        flex-direction: column;
      }
    `}}
`;

export const Window = (props: any) => {
  return <Wrapper {...props} />;
};

type styles = {
  bgc: boolean | undefined;
  footer: boolean | undefined;
  height: string | undefined;
  direction: string | undefined;
  justify: string | undefined;
  align: string | undefined;
};
