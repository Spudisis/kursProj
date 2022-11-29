import React from "react";
import { useUpdateEmail, useUpdatePassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { setEmailUser } from "../../redux/slices/slice";
import { useAppDispatch } from "../../redux/store";
import s from "./ChangeInfoPErson.module.css";
export const ChangeInfoPerson = () => {
  const dispatch = useAppDispatch();
  const id = React.useId;
  const [updatePassword, updating, error] = useUpdatePassword(auth as any);
  const [updateEmail, updatingEm, errorEm] = useUpdateEmail(auth as any);

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const [validPass, setValidPass] = React.useState(true);
  const [validEmail, setValidEmail] = React.useState(true);

  const ChangeEmail = async () => {
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return setValidEmail(false);
    }
    await updateEmail(email);
    if (errorEm) {
      console.log(errorEm.message);
    } else {
      dispatch(setEmailUser(email));
    }
  };
  const ChangePass = () => {
    if (pass.length < 6) {
      return setValidPass(false);
    }
    updatePassword(pass);
  };

  return (
    <div>
      <div className={s.infoPerson}>
        <div className={s.blockInfo}>
          <label htmlFor={id + "1"}>Email</label>
          <input
            type="email"
            id={id + "1"}
            onChange={(e) => {
              setEmail(e.target.value);
              setValidEmail(true);
            }}
          />
          {!validEmail && <span className={s.emailSpan}>Введите Email</span>}
          <button onClick={() => ChangeEmail()}>Изменить почту</button>
        </div>
        <div className={s.blockInfo}>
          <label htmlFor={id + "2"}>Password</label>
          <input
            type="text"
            id={id + "2"}
            onChange={(e) => {
              setPass(e.target.value);
              setValidPass(true);
            }}
          />
          {!validPass && <span className={s.passSpan}>Пароль должен быть от 6 символов</span>}
          <button onClick={() => ChangePass()}>Изменить пароль</button>
        </div>
      </div>
    </div>
  );
};
