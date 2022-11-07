import React from "react";

import s from "../../pages/profile/profile.module.css";
import { StatementProfile } from "./statement";

export const User = ({ statements }: any) => {
  return (
    <>
      <details open>
        <summary>Личная информация</summary>
        <div className={s.personInformation}>
          <div className={s.infoBlock}>
            <p>ФИО: </p>
          </div>
          <div className={s.infoBlock}>
            <p>День рождения: </p>
          </div>
          <div className={s.infoBlock}>
            <p>Место рождения: </p>
          </div>
          <div className={s.infoBlock}>
            <p>Национальность: </p>
          </div>
          <div className={s.infoBlock}>
            <p>Место жительства: </p>
          </div>
        </div>
      </details>
      <details>
        <summary>Мои заявления</summary>
        {statements ? (
          <div className={s.statements}>
            <StatementProfile
              number={2442}
              date={"22.01.2022"}
              status={"Ожидается рассмотрение"}
              type={"Развод"}
              user={false}
            />
            <StatementProfile
              number={324324}
              date={"22.22.2022"}
              status={"Ожидается рассмотрение"}
              type={"Развод"}
              user={false}
            />
            <StatementProfile
              number={23477777}
              date={"22.01.2022"}
              status={"В рассмотрении"}
              type={"Развод"}
              user={false}
            />
            <StatementProfile
              number={234534}
              date={"22.01.2022"}
              status={"Ожидается рассмотрение"}
              type={"Регистрация ребенка"}
              user={false}
            />
            <StatementProfile
              number={2422242}
              date={"22.01.2022"}
              status={"Ожидается рассмотрение"}
              type={"Развод"}
              user={false}
            />
          </div>
        ) : (
          <div className={s.statementsClear}>
            <h3>Список заявок пуст</h3>
            <button className={s.sendStatement}>Подать заявление</button>
          </div>
        )}
        <div className={s.line}></div>
      </details>
    </>
  );
};
