import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import s from "./redirectProfile.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Window } from "../componentStyled/window";
import { ButtonGeneral } from "../componentStyled/button";

const Box = styled.div`
  width: 550px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: hsl(207, 47%, 43%);
  border-radius: 30px;
  p {
    color: white;
    font-size: 25px;
    width: 300px;
    font-weight: 700;
    text-align: center;
  }
  @media screen and (max-width: 360px) {
    width: 100%;
    border-radius: 0px;
    p {
      width: 100%;
    }
  }
`;

const RedirectProfile = () => {
  const navigation = useNavigate();
  const redirect = () => {
    return navigation("/kursProj/profile");
  };
  return (
    <Window height="80vh" align="center" justify="center">
      <Box>
        <p>Статус заявки можно отследить в личном профиле</p>
        <ButtonGeneral size="20px" width="300px" margin="30px 0px 0px" onClick={() => redirect()}>
          Перейти в профиль
        </ButtonGeneral>
      </Box>
    </Window>
  );
};

export default RedirectProfile;
