import React from "react";
import { useSelector } from "react-redux";
import { changeStatementStatus } from "../../firebase/changeStatusStatement";
import { deleteData } from "../../redux/slices/getData";
import { getStatusSite } from "../../redux/slices/slice";
import { changeDataUsers } from "../../redux/slices/superUser";
import { useAppDispatch } from "../../redux/store";
import s from "./statement.module.css";
type stat = {
  number: number;
  date: string;
  id: number;
  status: string;
  type: string;
  user: boolean;
  docName: string;
  typeList: string;
  dateVisited: string;
  elem: any;
};
export const StatementProfile = ({
  number,
  date,
  id,
  status,
  type,
  user,
  docName,
  typeList,
  dateVisited,
  elem,
}: stat) => {
  const [classStat, setClassStat] = React.useState(false);
  const [changeStat, setChangeStat] = React.useState(false);
  const statusStatement = true;
  const dispatch = useAppDispatch();
  let { statusSite } = useSelector(getStatusSite);

  const deleteStatement = (id: number) => {
    dispatch(deleteData(id));
  };

  const changeStatusStatement = (n: number) => {
    setChangeStat(false);
    let status: string;
    n === 0
      ? (status = "Ожидается рассмотрение")
      : n === 1
      ? (status = "В рассмотрении")
      : n === 2
      ? (status = "Отказано")
      : (status = "Одобрено");
    changeStatementStatus(docName, statusSite, id, status);

    dispatch(changeDataUsers({ id, status, typeList }));
  };
  return (
    <div className={s.statement}>
      <div className={s.number}>Заявка № {number}</div>
      <div className={s.info}>
        <div>Дата подачи: {date}</div>
        <div>Статус рассмотрения: {status}</div>
        <div>Заявка типа: {type}</div>
        <div>Дата посещения: {dateVisited}</div>
      </div>
      <div className={`${s.buttons} + "" + ${s.buttonSelect}`}>
        <button className={s.button}>Посмотреть заявку</button>
        {!user && status !== "В рассмотрении" && status !== "Одобрено" && status !== "Отказано" ? (
          <button className={s.button} onClick={() => setClassStat(true)}>
            Отменить заявку
          </button>
        ) : (
          <div></div>
        )}
        {user && (
          <button className={s.button} onClick={() => setChangeStat(!changeStat)}>
            Статус
          </button>
        )}
        {changeStat && (
          <div className={s.changeStat}>
            <button onClick={() => changeStatusStatement(0)}>Ожидается рассмотрение</button>
            <button onClick={() => changeStatusStatement(1)}>В рассмотрении</button>
            <button onClick={() => changeStatusStatement(2)}>Отказано</button>
            <button onClick={() => changeStatusStatement(3)}>Одобрено</button>
          </div>
        )}
      </div>
      {classStat && statusStatement && (
        <div className={s.modalbgc} onClick={() => setClassStat(false)}>
          <div className={s.modalDeactiveStatement}>
            <h3>Вы действительно хотите удалить заявление?</h3>
            <div className={s.buttonsModal}>
              <button className={s.buttonModal} onClick={() => deleteStatement(id)}>
                Удалить
              </button>
              <button className={s.buttonModal} onClick={() => setClassStat(false)}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
