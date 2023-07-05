import React from "react";
import Logo from "./logo";

import vkLogo from "../assets/img/vk.png";
import { MainDiv } from "../componentStyled/mainDiv";
import styled from "styled-components";
import { Window } from "../componentStyled/window";

const FooterBlock = styled.footer`
  background-color: hsl(217, 57%, 15%);
  color: white;
`;

const IconHref = styled.a`
  width: 50px;
  height: 40px;
`;
export const Footer = () => {
  return (
    <FooterBlock>
      <MainDiv>
        <Window height="50px" align="center" footer>
          <p>Телефон приёмной: 8&nbsp;(831) 437-38-67 или 8&nbsp;(831) 433-42-77</p>
          <p>Обратная связь: official@zags.kreml.nnov.ru</p>
          <p>Политика конфиденциальности</p>
        </Window>
        <hr />
        <Window height="50px" align="center">
          <Logo />
          <Window align={"center"} height="auto">
            <p>Мы в соцсетях:</p>
            <IconHref href="#">
              <img src={vkLogo} alt="vk" />
            </IconHref>
          </Window>
        </Window>
      </MainDiv>
    </FooterBlock>
  );
};
