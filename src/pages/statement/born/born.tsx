import React from "react";
import s from "../marriage/marriage.module.css";
import GeneralInfo from "../../../components/typeStatement/generalInfo";
import PassportInfo from "../../../components/typeStatement/passportInfo";
import RedirectProfile from "../../../components/redirectProfile";

import { ActZags } from "../../../components/typeStatement/ActZags";
import BornSpec from "../../../components/typeStatement/FormsSpec/bornSpec";

import { uid } from "../../../store/slices/types";
import DateVisited from "../../../components/typeStatement/FormsSpec/dateVisited";
const Born = ({ uid, setTypeStatement, setDataObj }: uid) => {
  const [statusConfirm, setStatusConfirm] = React.useState(0); //какую форму показывать
  const [infoGeneral, setInfoGeneral] = React.useState({}); //объект с общей информацией
  const [infoPassport, setinfoPassport] = React.useState({}); //объект с данными паспорта
  const [infoSpec, setinfoSpec] = React.useState({}); //объект со спец информацией из данного заявления
  const [infoZags, setInfoZags] = React.useState({}); //объект с информацией о загсе
  const [infoDateVisited, setInfoDateVisited] = React.useState({});
  const informationStatement = {
    general: infoGeneral,
    passport: infoPassport,
    spec: infoSpec,
    zags: infoZags,
    dateVisited: infoDateVisited,
  };
  const [end, setEnd] = React.useState(false);

  React.useEffect(() => {
    if (end) {
      if (uid) {
        setTypeStatement("Регистрация рождения");
        setDataObj(informationStatement);
      }
    }
  }, [end]);
  return (
    <>
      <div className={statusConfirm === 0 ? s.back : s.hide}>
        <GeneralInfo
          statement={"born"}
          numberForm={1}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setInfoGeneral(n)}
          necessarily={false}
        />
      </div>
      <div className={statusConfirm === 1 ? s.back : s.hide}>
        <PassportInfo
          statement={"born"}
          numberForm={2}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setinfoPassport(n)}
          necessarily={false}
        />
        <button className={s.button} onClick={() => setStatusConfirm(statusConfirm - 1)}>
          Вернуться
        </button>
      </div>
      <div className={statusConfirm === 2 ? s.back : s.hide}>
        <ActZags
          numberForm={3}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setInfoZags(n)}
          type={"born"}
          necessarily={false}
        />
        <button className={s.button} onClick={() => setStatusConfirm(statusConfirm - 1)}>
          Вернуться
        </button>
      </div>
      <div className={statusConfirm === 3 ? s.back : s.hide}>
        <BornSpec numberForm={4} status={(n: number) => setStatusConfirm(n)} info={(n: any) => setinfoSpec(n)} />
        <button className={s.button} onClick={() => setStatusConfirm(statusConfirm - 1)}>
          Вернуться
        </button>
      </div>
      <div className={statusConfirm === 4 ? s.back : s.hide}>
        <DateVisited
          numberForm={5}
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

export default Born;
