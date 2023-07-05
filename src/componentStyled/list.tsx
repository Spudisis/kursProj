
import styled from "styled-components";
const List = styled.div`
  display: ${({ display }: list) => display || "flex"};
  align-items: ${({ align }: list) => align || "center"};
  justify-content: ${({ justify }: list) => justify || "space-between"};
  flex-direction: ${({ direction }: list) => direction || "row"};
  height: 100%;
  a {
    text-decoration: none;
    margin-right: 20px;

    text-align: center;
    font-size: 16px;
  }
  a:hover {
    color: gold;
  }
  a:last-child {
    margin-right: 0px;
  }
  @media screen and (max-width: 1100px) {
    a {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 968px) {
    display: none;
  }
`;
export const ListView = (props: any) => {
  return <List {...props}></List>;
};

type list = {
  display: String;
  align: String;
  justify: String;
  direction: String;
};
