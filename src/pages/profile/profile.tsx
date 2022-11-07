import React from "react";
import { StatementProfile } from "../../components/profile/statement";
import { SuperUser } from "../../components/profile/superUser";
import { User } from "../../components/profile/user";
import s from "./profile.module.css";

export const Profile = () => {
  const [statusProfile, setStatusProfile] = React.useState(true);
  const [statements, setStatemenst] = React.useState(true);
  return (
    <div className={s.root}>
      <div className={s.pageInfo}>
        <h2>Личный кабинет</h2>
      </div>
      {statusProfile ? <SuperUser statements={statements} /> : <User statements={statements} />}

      <div className={s.buttons}>
        {!statusProfile && <button>Редактировать личные данные</button>}
        <button>Выйти из профиля</button>
      </div>
    </div>
  );
};
