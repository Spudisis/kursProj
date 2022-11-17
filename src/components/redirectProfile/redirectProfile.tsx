import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./redirectProfile.module.css";
const RedirectProfile = () => {
  const navigation = useNavigate();
  const redirect = () => {
    return navigation("kursProj/profile");
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
