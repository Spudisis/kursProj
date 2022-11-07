import React from "react";
import s from "./marriage.module.css";
import GeneralInfo from "../../../components/typeStatement/generalInfo";
import PassportInfo from "../../../components/typeStatement/passportInfo";
import RedirectProfile from "../../../components/redirectProfile/redirectProfile";
import MarriageSpec from "../../../components/typeStatement/FormsSpec/marriageSpec";

const MarriageStatement = () => {
  const [statusConfirm, setStatusConfirm] = React.useState(0); //какую форму показывать
  const [infoGeneral, setInfoGeneral] = React.useState({}); //объект с общей информацией
  const [infoPassport, setinfoPassport] = React.useState({}); //объект с данными паспорта
  const [infoSpec, setinfoSpec] = React.useState({}); //объект со спец информацией из данного заявления

  const informationStatement = { general: infoGeneral, passport: infoPassport, spec: infoSpec };
  const [end, setEnd] = React.useState(false);

  React.useEffect(() => {
    console.log(informationStatement);
  }, [informationStatement]);
  return (
    <>
      <div className={statusConfirm === 0 ? s.back : s.hide}>
        <GeneralInfo
          statement={"marriage"}
          numberForm={1}
          status={(n: number) => setStatusConfirm(n)}
          info={(n: any) => setInfoGeneral(n)}
          necessarily={true}
        />
      </div>
      <div className={statusConfirm === 1 ? s.back : s.hide}>
        <PassportInfo
          statement={"marriage"}
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
        <MarriageSpec
          numberForm={3}
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

export default MarriageStatement;
