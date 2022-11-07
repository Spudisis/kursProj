import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StatementProfile } from "../../components/profile/statement";
import { SuperUser } from "../../components/profile/superUser";
import { User } from "../../components/profile/user";
import { auth } from "../../firebase/config";
import s from "./profile.module.css";

export const Profile = () => {
  const navigation = useNavigate();

  const [statusProfile, setStatusProfile] = React.useState(true);
  const [statements, setStatemenst] = React.useState(true);
  const logout = () => {
    signOut(auth);
    return navigation("/");
  };
  return (
    <div className={s.root}>
      <div className={s.pageInfo}>
        <h2>Личный кабинет</h2>
      </div>
      {statusProfile ? <SuperUser statements={statements} /> : <User statements={statements} />}

      <div className={s.buttons}>
        {!statusProfile && <button>Редактировать личные данные</button>}
        <button onClick={() => logout()}>Выйти из профиля</button>
      </div>
    </div>
  );
};
