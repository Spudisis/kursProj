import styled from "styled-components";
import { css } from "styled-components";
const Wrapper = styled.div`
  min-height: ${({ height }: styles) => height || "100vh"};
  display: flex;
  flex-direction: ${({ direction }: styles) => direction || "row"};
  justify-content: ${({ justify }: styles) => justify || "space-between"};
  align-items: ${({ align }: styles) => align || "stretch"};
  width: ${({ width }: styles) => width || "auto"};
  margin: ${({ margin }: styles) => margin || "0px"};
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
    ${(props: styles) =>
      props.notFound &&
      css`
        padding: 20px 40px;
        color: white;
        font-size: 30px;
        margin: 0 auto;
        background-color: hsl(207, 62%, 56%);
        border-radius: 20px;
      `}}
      ${(props: styles) =>
        props.pay &&
        css`
          flex-direction: row;
          align-items: center;
          img {
            object-fit: contain;
            max-width: 300px;
            height: auto;
          }
          div {
            margin-left: 30px;
          }
        `}}
`;

export const Window = (props: any) => {
  return <Wrapper {...props} />;
};

type styles = {
  margin: string | undefined;
  width: string | undefined;
  bgc: boolean | undefined;
  footer: boolean | undefined;
  height: string | undefined;
  direction: string | undefined;
  justify: string | undefined;
  align: string | undefined;
  notFound: boolean | undefined;
  pay: boolean | undefined;
};
