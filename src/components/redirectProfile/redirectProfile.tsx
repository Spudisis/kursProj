import React from "react";
import s from "./redirectProfile.module.css";
const RedirectProfile = () => {
  return (
    <div className={s.redirectProfile}>
      <div className={s.box}>
        <p>Статус заявки можно отследить в личном профиле</p>
        <button>Перейти в профиль</button>
      </div>
    </div>
  );
};

export default RedirectProfile;
