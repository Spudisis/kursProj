import React from "react";
import { useSelector } from "react-redux";
import s from "./profile.module.css";
import { getdataUsers } from "../../store/slices/superUser";
import { StatementProfile } from "./statement";
import { Window } from "../../componentStyled/window";
import { ButtonGeneral } from "../../componentStyled/button";

export const SuperUser = () => {
  const { statementsUsers, checkStatementsUsers, confirmStatementsUsers } = useSelector(getdataUsers);

  const [paginationStatementsUsers, setPaginationStatementsUsers] = React.useState(6);
  const [paginationCheckStatementsUsers, setPaginationCheckStatementsUsers] = React.useState(6);
  const [paginationСonfirmStatementsUsers, setPaginationСonfirmStatementsUsers] = React.useState(6);

  const changePaginationStr = (n: string, type: string) => {
    const lengthstatementsUsers = statementsUsers.length;
    const lengthcheckStatementsUsers = checkStatementsUsers.length;
    const lengthСonfirmStatementsUsers = confirmStatementsUsers.length;
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
    } else if (type == "checkStatementsUser") {
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
    } else {
      if (n === "back") {
        if (paginationCheckStatementsUsers === 6) {
        } else {
          setPaginationСonfirmStatementsUsers(paginationСonfirmStatementsUsers - 6);
        }
      } else {
        if (paginationCheckStatementsUsers >= lengthСonfirmStatementsUsers) {
        } else {
          setPaginationСonfirmStatementsUsers(paginationСonfirmStatementsUsers + 6);
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
                      pay={elem.pay}
                    />
                  );
                })}
            </div>
            {checkStatementsUsers.length > 6 && (
              <Window justify="space-between" height="auto">
                <ButtonGeneral width="150px" onClick={() => changePaginationStr("back", "checkStatementsUser")}>
                  Назад
                </ButtonGeneral>
                <ButtonGeneral width="150px" onClick={() => changePaginationStr("next", "checkStatementsUser")}>
                  Далее
                </ButtonGeneral>
              </Window>
            )}
          </>
        ) : (
          <div className={s.statementsClear}>
            <h3>Нет заявок в проверке</h3>
          </div>
        )}
      </details>
      <details open={checkStatementsUsers.length === 0}>
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
                      pay={elem.pay}
                    />
                  );
                })}
            </div>
            {statementsUsers.length > 6 && (
              <Window justify="space-between" height="auto">
                <ButtonGeneral width="150px" onClick={() => changePaginationStr("back", "StatementsUsers")}>
                  Назад
                </ButtonGeneral>
                <ButtonGeneral width="150px" onClick={() => changePaginationStr("next", "StatementsUsers")}>
                  Далее
                </ButtonGeneral>
              </Window>
            )}
          </>
        ) : (
          <div className={s.statementsClear}>
            <h3>Нет новых заявлений</h3>
          </div>
        )}
      </details>
      <details open={statementsUsers.length === 0}>
        <summary>Одобреннные заявления</summary>
        {confirmStatementsUsers.length !== 0 ? (
          <>
            <div className={s.statements}>
              {confirmStatementsUsers
                .slice(paginationСonfirmStatementsUsers - 6, paginationСonfirmStatementsUsers)
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
                      typeList={"statementConfirm"}
                      key={index + "statement"}
                      elem={elem.info}
                      pay={elem.pay}
                    />
                  );
                })}
            </div>
            {statementsUsers.length > 6 && (
              <Window justify="space-between" height="auto">
                <ButtonGeneral width="150px" onClick={() => changePaginationStr("back", "confirm")}>
                  Назад
                </ButtonGeneral>
                <ButtonGeneral width="150px" onClick={() => changePaginationStr("next", "confirm")}>
                  Далее
                </ButtonGeneral>
              </Window>
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
