import React from "react";
import { useSelector } from "react-redux";
import s from "../../pages/profile/profile.module.css";
import { getdataUsers } from "../../redux/slices/superUser";
import { StatementProfile } from "./statement";

export const SuperUser = () => {
  const { statementsUsers, checkStatementsUsers } = useSelector(getdataUsers);

  const [paginationStatementsUsers, setPaginationStatementsUsers] = React.useState(6);
  const [paginationCheckStatementsUsers, setPaginationCheckStatementsUsers] = React.useState(6);

  const changePaginationStr = (n: string, type: string) => {
    const lengthstatementsUsers = statementsUsers.length;
    const lengthcheckStatementsUsers = checkStatementsUsers.length;
    if (type === "StatementsUsers") {
      if (n === "back") {
        if (paginationStatementsUsers === 6) {
        } else {
          setPaginationStatementsUsers(paginationStatementsUsers - 6);
        }
      } else {
        if (paginationStatementsUsers >= lengthstatementsUsers) {
        } else {
          setPaginationStatementsUsers(paginationStatementsUsers + 6);
        }
      }
    } else {
      if (n === "back") {
        if (paginationCheckStatementsUsers === 6) {
        } else {
          setPaginationCheckStatementsUsers(paginationCheckStatementsUsers - 6);
        }
      } else {
        if (paginationCheckStatementsUsers >= lengthcheckStatementsUsers) {
        } else {
          setPaginationCheckStatementsUsers(paginationCheckStatementsUsers + 6);
        }
      }
    }
  };
  return (
    <>
      <details open>
        <summary>Рассматриваемые заявки</summary>
        {checkStatementsUsers.length !== 0 ? (
          <>
            <div className={s.statements}>
              {checkStatementsUsers
                .slice(paginationCheckStatementsUsers - 6, paginationCheckStatementsUsers)
                .map((elem: any, index: number) => {
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
                })}
            </div>
            {checkStatementsUsers.length > 6 && (
              <div className={s.buttons}>
                <button onClick={() => changePaginationStr("back", "checkStatementsUser")}>Назад</button>
                <button onClick={() => changePaginationStr("next", "checkStatementsUser")}>Далее</button>
              </div>
            )}
          </>
        ) : (
          <div className={s.statementsClear}>
            <h3>Нет заявок в проверке</h3>
          </div>
        )}
      </details>
      <details>
        <summary>Заявления</summary>
        {statementsUsers.length !== 0 ? (
          <>
            <div className={s.statements}>
              {statementsUsers
                .slice(paginationStatementsUsers - 6, paginationStatementsUsers)
                .map((elem: any, index: number) => {
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
                })}
            </div>
            {statementsUsers.length > 6 && (
              <div className={s.buttons}>
                <button onClick={() => changePaginationStr("back", "StatementsUsers")}>Назад</button>
                <button onClick={() => changePaginationStr("next", "StatementsUsers")}>Далее</button>
              </div>
            )}
          </>
        ) : (
          <div className={s.statementsClear}>
            <h3>Нет новых заявлений</h3>
          </div>
        )}
      </details>
    </>
  );
};
