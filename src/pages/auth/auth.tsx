import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./auth.module.css";
import logo from "../../assets/img/emblem.png";
import Login from "../../components/Auth/login";
import Registation from "../../components/Auth/registration";

import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
const Auth = () => {
  const [typeAuth, settypeAuth] = React.useState(false);
  const [styleWarning, setStyleWarning] = React.useState(s.warningHide);

  const navigation = useNavigate();
  const [CreateUserWithEmailAndPassword, userReg, loadingReg, errorReg] = useCreateUserWithEmailAndPassword(
    auth as any
  );
  const [signInWithEmailAndPassword, userLog, loadingLog, errorLog] = useSignInWithEmailAndPassword(auth as any);

  const handleRegister = (data: any) => {
    const { email, password, ...passRepeat } = data;
    CreateUserWithEmailAndPassword(email, password);
  };
  const handleLogin = (data: any) => {
    const { email, password, ...passRepeat } = data;
    signInWithEmailAndPassword(email, password);
  };
  React.useEffect(() => {
    if (errorLog || errorReg) {
      setStyleWarning(s.warning);
    }
  }, [errorLog, errorReg]);

  React.useEffect(() => {
    if (userLog || userReg) {
      return navigation("/profile");
    }
  }, [userReg, userLog]);

  React.useEffect(() => {
    setStyleWarning(s.warningHide);
  }, [typeAuth]);

  return (
    <div className={s.wrapper}>
      <div className={s.root}>
        <div className={s.blockInfo}>
          <img src={logo} alt="NN" />
          <div className={s.buttonsAuth}>
            <button className={typeAuth ? s.active : s.deactive} onClick={() => settypeAuth(true)}>
              Войти
            </button>
            /
            <button className={typeAuth ? s.deactive : s.active} onClick={() => settypeAuth(false)}>
              Регистрация
            </button>
          </div>
        </div>
        {typeAuth ? (
          <Login setData={(n: any) => handleLogin(n)} />
        ) : (
          <Registation setData={(n: any) => handleRegister(n)} />
        )}
        <div className={styleWarning}>{!typeAuth ? "Такой Email уже существует" : "Перепроверьте данные"}</div>
      </div>
    </div>
  );
};

export default Auth;
