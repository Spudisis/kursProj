import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/img/emblem.png";
import Login from "../../components/Auth/login";
import Registation from "../../components/Auth/registration";

import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { setPerson } from "../../redux/slices/slice";
import { useAppDispatch } from "../../redux/store";
import { Window } from "../../componentStyled/window";
import { Root } from "../../componentStyled/root";
import { AuthButtonSwap } from "../../componentStyled/auth/authChange";
import { ButtonsSwap } from "../../componentStyled/auth/authButtonsSpaw";
import { AuthWarningSwap } from "../../componentStyled/auth/warning";

const Auth = () => {
  const dispath = useAppDispatch();
  const [typeAuth, settypeAuth] = React.useState(false);
  const [styleWarning, setStyleWarning] = React.useState(false);
  const [user, loading, error] = useAuthState(auth as any);
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
    user && navigation("/kursProj/profile");
  }, [user]);
  React.useEffect(() => {
    if (errorLog || errorReg) {
      setStyleWarning(true);
    }
  }, [errorLog, errorReg]);

  React.useEffect(() => {
    if (userLog?.user.uid) {
      console.log(userLog.user.uid);
      dispath(setPerson(userLog.user.uid));
    } else if (userReg?.user.uid) {
      console.log(userReg.user.uid);
      dispath(setPerson(userReg.user.uid));
    }
    if (userLog || userReg) {
      return navigation("/kursProj/profile");
    }
  }, [userReg, userLog]);

  React.useEffect(() => {
    setStyleWarning(false);
  }, [typeAuth]);

  return (
    <Window bgc height={"90vh"} justify="center" align="center">
      <Root auth>
        <Root justify="center" align="center" height="auto">
          <img src={logo} alt="NN" />
          <ButtonsSwap>
            <AuthButtonSwap swap={typeAuth} onClick={() => settypeAuth(true)}>
              Войти
            </AuthButtonSwap>
            /
            <AuthButtonSwap swap={!typeAuth} onClick={() => settypeAuth(false)}>
              Регистрация
            </AuthButtonSwap>
          </ButtonsSwap>
        </Root>
        {typeAuth ? (
          <Login setData={(n: any) => handleLogin(n)} />
        ) : (
          <Registation setData={(n: any) => handleRegister(n)} />
        )}
        <AuthWarningSwap swap={styleWarning}>
          {!typeAuth ? "Такой Email уже существует" : "Перепроверьте данные"}
        </AuthWarningSwap>
      </Root>
    </Window>
  );
};

export default Auth;
