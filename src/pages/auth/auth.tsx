import React from "react";

import s from "./auth.module.css";
import logo from "../../assets/img/emblem.png";
import Login from "../../components/Auth/login";
import Registation from "../../components/Auth/registration";
const Auth = () => {
  const [statusAuth, setStatusAuth] = React.useState(false);

  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <div className={s.blockInfo}>
          <img src={logo} alt="NN" />
          <div className={s.buttonsAuth}>
            <button className={statusAuth ? s.active : s.deactive} onClick={() => setStatusAuth(true)}>
              Регистрация
            </button>
            /
            <button className={statusAuth ? s.deactive : s.active} onClick={() => setStatusAuth(false)}>
              Войти
            </button>
          </div>
        </div>
        {statusAuth ? <Login /> : <Registation />}
      </div>
    </div>
  );
};

export default Auth;
