import React from "react";
import { useSelector } from "react-redux";
import { addStatement } from "../../firebase/addStatement";
import s from "../../pages/profile/profile.module.css";
import { getdata } from "../../redux/slices/getData";
import { getEmailUser, getStatusSite, getUid } from "../../redux/slices/slice";
import { StatementProfile } from "./statement";

export const User = () => {
  const { data } = useSelector(getdata);
  const { uid } = useSelector(getUid);
  const { EmailUser } = useSelector(getEmailUser);
  const { statusSite } = useSelector(getStatusSite);
  React.useEffect(() => {
    if (data.length !== 0) {
      console.log(data);
      addStatement(uid, data, statusSite);
    }
  }, [data]);
  return (
    <>
      <details open>
        <summary>Личная информация</summary>
        <div className={s.personInformation}>
          <div className={s.infoBlock}>
            <p>Email: {EmailUser}</p>
          </div>
        </div>
      </details>
      <details>
        <summary>Мои заявления</summary>
        {data.length !== 0 ? (
          <div className={s.statements}>
            {data.map((elem: any, index: number) => {
              return (
                <StatementProfile
                  docName={"no"}
                  number={elem.id}
                  date={elem.date}
                  status={elem.status}
                  type={elem.type}
                  user={false}
                  id={elem.id}
                  dateVisited={elem.info.dateVisited.dateVisited}
                  typeList={"no"}
                  key={index + "statement"}
                  elem={elem.info}
                />
              );
            })}
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
