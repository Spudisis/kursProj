import React from "react";
import s from "./statement.module.css";
type stat = {
  number: number;
  date: string;
  status: string;
  type: string;
  user: boolean;
};
export const StatementProfile = ({ number, date, status, type, user }: stat) => {
  const [classStat, setClassStat] = React.useState(false);
  const [changeStat, setChangeStat] = React.useState(false);
  const statusStatement = true;

  return (
    <div className={s.statement}>
      <div className={s.number}>Заявка № {number}</div>
      <div className={s.info}>
        <div>Дата подачи: {date}</div>
        <div>Статус рассмотрения: {status}</div>
        <div>Заявка типа: {type}</div>
      </div>
      <div className={`${s.buttons} + "" + ${s.buttonSelect}`}>
        <button className={s.button}>Посмотреть заявку</button>
        {!user && status !== "В рассмотрении" ? (
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
            <button>Ожидается рассмотрение</button>
            <button>В рассмотрении</button>
            <button>Отказано</button>
            <button>Одобрено</button>
          </div>
        )}
      </div>
      {classStat && statusStatement && (
        <div className={s.modalbgc} onClick={() => setClassStat(false)}>
          <div className={s.modalDeactiveStatement}>
            <h3>Вы действительно хотите удалить заявление?</h3>
            <div className={s.buttonsModal}>
              <button className={s.buttonModal}>Удалить</button>
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
