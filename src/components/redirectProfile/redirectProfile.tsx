import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import s from "./redirectProfile.module.css";
import { Link } from "react-router-dom";
const RedirectProfile = () => {
  const navigation = useNavigate();
  const redirect = () => {
    console.log("a");
    return navigation("/kursProj/profile");
  };
  return (
    <div className={s.redirectProfile}>
      <div className={s.box}>
        <p>Статус заявки можно отследить в личном профиле</p>
        <button onClick={() => redirect()}>Перейти в профиль</button>
      </div>
    </div>
  );
};

export default RedirectProfile;
