import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const List = styled.div`
position: absolute;
height: auto;
border-radius: 20px;
width: 300px;
background-color: hsl(217, 49%, 22%);
right: 5px;
top: 55px;
padding: 20px 5px;
z-index: 10;
box-shadow: 3px 3px 10px hsl(217, 49%, 22%);
display: flex;
flex-direction: column;
a {
  padding: 5px 0px;
  border-top: 2px solid white;
}
a:hover:not(:last-child) {
  background-color: white;
  color: black;
}
@media screen and (min-width: 968px) {
  display: none;
}
}
`;
export const ListMenu = (props: any) => {
  return <List {...props} />;
};
