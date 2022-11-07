import React from "react";
import s from "../marriage/marriage.module.css";
import GeneralInfo from "../../../components/typeStatement/generalInfo";
import PassportInfo from "../../../components/typeStatement/passportInfo";
import RedirectProfile from "../../../components/redirectProfile/redirectProfile";
import { ActZags } from "../../../components/typeStatement/ActZags";
import { DivorceSpec } from "../../../components/typeStatement/FormsSpec/divorce";

const Divorce = () => {
  const [statusConfirm, setStatusConfirm] = React.useState(0); //какую форму показывать
  const [infoGeneral, setInfoGeneral] = React.useState({}); //объект с общей информацией
  const [infoPassport, setinfoPassport] = React.useState({}); //объект с данными паспорта
  const [infoSpec, setinfoSpec] = React.useState({}); //объект со спец информацией из данного заявления
  const [infoZags, setInfoZags] = React.useState({}); //объект с информацией о загсе
  const informationStatement = { general: infoGeneral, passport: infoPassport, spec: infoSpec, zags: infoZags };
  const [end, setEnd] = React.useState(false);

  React.useEffect(() => {
    console.log(informationStatement);
  }, [informationStatement]);
  return (
    <>
      <div className={statusConfirm === 0 ? s.back : s.hide}>
        <GeneralInfo
          statement={"divorce"}
          numberForm={1}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setInfoGeneral(n)}
          necessarily={true}
        />
      </div>
      <div className={statusConfirm === 1 ? s.back : s.hide}>
        <PassportInfo
          statement={"divorce"}
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
        <ActZags
          numberForm={3}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setInfoZags(n)}
          type={"divorce"}
          necessarily={true}
        />
        <button className={s.button} onClick={() => setStatusConfirm(statusConfirm - 1)}>
          Вернуться
        </button>
      </div>
      <div className={statusConfirm === 3 ? s.back : s.hide}>
        <DivorceSpec
          numberForm={4}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setinfoSpec(n)}
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

export default Divorce;
