import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStatement } from "../../firebase/addStatement";
import s from "../../pages/profile/profile.module.css";
import { getdata } from "../../redux/slices/getData";
import { getEmailUser, getStatusSite, getUid } from "../../redux/slices/slice";
import { StatementProfile } from "./statement";

export const User = ({ data }: any) => {
  const { uid } = useSelector(getUid);
  const { EmailUser } = useSelector(getEmailUser);
  const { statusSite } = useSelector(getStatusSite);

  const navigation = useNavigate();

  const [pagination, setPagination] = React.useState(6);
  React.useEffect(() => {
    console.log(data);
    addStatement(uid, data, statusSite); // при изменеии заявки добавляется в файрбейз
  }, [data]);

  const changePaginationStr = (n: string) => {
    const length = data.length;

    if (n === "back") {
      if (pagination === 6) {
      } else {
        console.log("aa");
        setPagination(pagination - 6);
      }
    } else {
      if (pagination >= length) {
      } else {
        console.log("aa");
        setPagination(pagination + 6);
      }
    }
  };
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
      <details open>
        <summary>Мои заявления</summary>
        {data.length !== 0 ? (
          <>
            <div className={s.statements}>
              {data.slice(pagination - 6, pagination).map((elem: any, index: number) => {
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
            {data.length > 6 && (
              <div className={s.buttons}>
                <button onClick={() => changePaginationStr("back")}>Назад</button>
                <button onClick={() => changePaginationStr("next")}>Далее</button>
              </div>
            )}
          </>
        ) : (
          <div className={s.statementsClear}>
            <h3>Список заявок пуст</h3>
            <button className={s.sendStatement} onClick={() => navigation("/statement")}>
              Подать заявление
            </button>
          </div>
        )}
        <div className={s.line}></div>
      </details>
    </>
  );
};
