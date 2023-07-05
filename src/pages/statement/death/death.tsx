import React from "react";
import RedirectProfile from "../../../components/redirectProfile";
import DateVisited from "../../../components/typeStatement/FormsSpec/dateVisited";
import DeathSpec from "../../../components/typeStatement/FormsSpec/deathSpec";
import GeneralInfo from "../../../components/typeStatement/generalInfo";
import PassportInfo from "../../../components/typeStatement/passportInfo";

import { uid } from "../../../store/slices/types";
import s from "../marriage/marriage.module.css";

export const Death = ({ uid, setTypeStatement, setDataObj }: uid) => {
  const [statusConfirm, setStatusConfirm] = React.useState(0); //какую форму показывать
  const [infoGeneral, setInfoGeneral] = React.useState({}); //объект с общей информацией
  const [infoPassport, setinfoPassport] = React.useState({}); //объект с данными паспорта
  const [infoSpec, setinfoSpec] = React.useState({}); //объект со спец информацией из данного заявления
  const [infoDateVisited, setInfoDateVisited] = React.useState({});
  const informationStatement = {
    general: infoGeneral,
    passport: infoPassport,
    spec: infoSpec,
    dateVisited: infoDateVisited,
  };
  const [end, setEnd] = React.useState(false);

  React.useEffect(() => {
    if (end) {
      if (uid) {
        setTypeStatement("Регистрация смерти");
        setDataObj(informationStatement);
      }
    }
  }, [end]);
  return (
    <>
      <div className={statusConfirm === 0 ? s.back : s.hide}>
        <GeneralInfo
          statement={"death"}
          numberForm={1}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setInfoGeneral(n)}
          necessarily={true}
        />
      </div>
      <div className={statusConfirm === 1 ? s.back : s.hide}>
        <PassportInfo
          statement={"death"}
          numberForm={2}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setinfoPassport(n)}
          necessarily={true}
        />
        <button className={s.button} onClick={() => setStatusConfirm(statusConfirm - 1)}>
          Вернуться
        </button>
      </div>
      <div className={statusConfirm === 2 ? s.back : s.hide}>
        <DeathSpec numberForm={3} status={(n: number) => setStatusConfirm(n)} info={(n: any) => setinfoSpec(n)} />
        <button className={s.button} onClick={() => setStatusConfirm(statusConfirm - 1)}>
          Вернуться
        </button>
      </div>
      <div className={statusConfirm === 3 ? s.back : s.hide}>
        <DateVisited
          numberForm={4}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setInfoDateVisited(n)}
          setEnd={(n: boolean) => setEnd(n)}
        />
        <button className={s.button} onClick={() => setStatusConfirm(statusConfirm - 1)}>
          Вернуться
        </button>
      </div>

      {end ? <RedirectProfile /> : ""}
    </>
  );
};
