import React from "react";
import s from "../../pages/profile/profile.module.css";
import { StatementProfile } from "./statement";

export const SuperUser = ({ statements }: any) => {
  const activeStatements = true;
  return (
    <>
      <details open>
        <summary>Рассматриваемые заявки</summary>
        {activeStatements ? (
          <div className={s.statements}>
            <StatementProfile
              number={2442}
              date={"22.01.2022"}
              status={"Ожидается рассмотрение"}
              type={"Развод"}
              user={true}
            />
            <StatementProfile
              number={324324}
              date={"22.22.2022"}
              status={"Ожидается рассмотрение"}
              type={"Развод"}
              user={true}
            />
          </div>
        ) : (
          <div className={s.statementsClear}>
            <h3>Нет заявок в проверке</h3>
          </div>
        )}
      </details>
      <details>
        <summary>Заявления</summary>
        {statements ? (
          <div>
            <div>
              <input type="text" /> <input type="text" />
            </div>
            <div className={s.statements}>
              <StatementProfile
                number={2442}
                date={"22.01.2022"}
                status={"Ожидается рассмотрение"}
                type={"Развод"}
                user={true}
              />
              <StatementProfile
                number={324324}
                date={"22.22.2022"}
                status={"Ожидается рассмотрение"}
                type={"Развод"}
                user={true}
              />
              <StatementProfile
                number={23477777}
                date={"22.01.2022"}
                status={"В рассмотрении"}
                type={"Развод"}
                user={true}
              />
              <StatementProfile
                number={234534}
                date={"22.01.2022"}
                status={"Ожидается рассмотрение"}
                type={"Регистрация ребенка"}
                user={true}
              />
              <StatementProfile
                number={2422242}
                date={"22.01.2022"}
                status={"Ожидается рассмотрение"}
                type={"Развод"}
                user={true}
              />
            </div>
          </div>
        ) : (
          <div className={s.statementsClear}>
            <h3>Список заявок пуст</h3>
          </div>
        )}
      </details>
    </>
  );
};
