import React from "react";
import { Link } from "react-router-dom";

import { Window } from "../../componentStyled/window";
import { NameBlock } from "../../componentStyled/nameBlock";
import styled from "styled-components";

const Links = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  a {
    color: white;
    min-width: 600px;
    padding: 20px 0px;
    background-color: hsl(207, 47%, 43%);
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  a:hover {
    animation-name: link;
    animation-duration: 2s;
    animation-delay: infinite;
  }
  @keyframes link {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
      background-color: hsl(207, 63%, 58%);
    }
    100% {
      transform: scale(1);
      background-color: hsl(207, 47%, 43%);
    }
  }
  @keyframes linkFont {
    0% {
      font-size: 20px;
    }
    50% {
      font-size: 25px;
      background-color: hsl(207, 63%, 58%);
    }
    100% {
      font-size: 20px;
      background-color: hsl(207, 47%, 43%);
    }
  }
  @media screen and (max-width: 630px) {
    width: 100%;
    margin-top: 20px;

    a {
      min-width: 90%;
    }
    a:hover {
      animation-name: linkFont;
      animation-duration: 2s;
      animation-delay: infinite;
    }
  }
`;

const StatementLinks = () => {
  return (
    <Window direction="column" align="center" justify="center" height="auto">
      <NameBlock>Подать заявление</NameBlock>
      <Links>
        <Link to="bornRegistration">Регистрация рождения ребенка</Link>
        <Link to="marriage">Регистрация брака</Link>
        <Link to="divorce">Расторжение брака</Link>
        <Link to="death">Регистрация смерти</Link>
      </Links>
    </Window>
  );
};

export default StatementLinks;
