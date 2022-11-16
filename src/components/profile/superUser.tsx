import React from "react";
import { useSelector } from "react-redux";
import s from "../../pages/profile/profile.module.css";
import { getdataUsers } from "../../redux/slices/superUser";
import { StatementProfile } from "./statement";

export const SuperUser = ({ statements }: any) => {
  const { statementsUsers, checkStatementsUsers } = useSelector(getdataUsers);

  return (
    <>
      <details open>
        <summary>Рассматриваемые заявки</summary>
        <div className={s.statements}>
          {checkStatementsUsers.length !== 0 ? (
            checkStatementsUsers.map((elem: any, index: number) => {
              return (
                <StatementProfile
                  docName={elem.docName}
                  number={elem.id}
                  date={elem.date}
                  status={elem.status}
                  type={elem.type}
                  user={true}
                  id={elem.id}
                  dateVisited={elem.info.dateVisited.dateVisited}
                  typeList={"statementCheck"}
                  key={index + "statement"}
                  elem={elem.info}
                />
              );
            })
          ) : (
            <div className={s.statementsClear}>
              <h3>Нет заявок в проверке</h3>
            </div>
          )}
        </div>
      </details>
      <details>
        <summary>Заявления</summary>

        <div className={s.statements}>
          {statementsUsers.length !== 0 ? (
            statementsUsers.map((elem: any, index: number) => {
              return (
                <StatementProfile
                  docName={elem.docName}
                  number={elem.id}
                  date={elem.date}
                  status={elem.status}
                  type={elem.type}
                  user={true}
                  id={elem.id}
                  dateVisited={elem.info.dateVisited.dateVisited}
                  typeList={"statement"}
                  key={index + "statement"}
                  elem={elem.info}
                />
              );
            })
          ) : (
            <div className={s.statementsClear}>
              <h3>Нет новых заявлений</h3>
            </div>
          )}
        </div>
      </details>
    </>
  );
};
