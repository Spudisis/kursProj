import React from "react";
import MarriageStatement from "./marriage/marriage";
import s from "./statement.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import StatementLinks from "../../components/NavLinks/statementLinks";
import Born from "./born/born";
import Divorce from "./divorce/divorce";
import { Death } from "./death/death";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { getStatusSite, getUid } from "../../redux/slices/slice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { getdata, setData } from "../../redux/slices/getData";
import { addStatement } from "../../firebase/addStatement";

const Statement = () => {
  const { uid } = useSelector(getUid);
  const { data } = useSelector(getdata);
  const { statusSite } = useSelector(getStatusSite);
  const dispatch = useAppDispatch();

  const [type, setTypeStatement] = React.useState("");
  const [dataObj, setDataObj] = React.useState({});
  React.useEffect(() => {
    if (Object.keys(dataObj).length !== 0) {
      if (uid) {
        console.log("changeType");
        const unicId = Math.floor(Math.random() * (999999999 - 10000000) + 10000000);
        const date = new Date();
        const dateNow = date.toLocaleString();
        const objectStatement: any = {
          id: unicId,
          status: "Ожидается рассмотрение",
          type,
          date: dateNow,
          info: dataObj,
          pay: false,
        };

        dispatch(setData(objectStatement));
      }
    }
  }, [dataObj]);

  React.useEffect(() => {
    if (data) {
      addStatement(uid, data, statusSite);
    }
  }, [data]);
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path="" element={<StatementLinks />} />
        <Route
          path="marriage"
          element={
            <MarriageStatement
              uid={uid}
              setTypeStatement={(n: any) => setTypeStatement(n)}
              setDataObj={(n: any) => setDataObj(n)}
            />
          }
        />
        <Route
          path="bornRegistration"
          element={
            <Born uid={uid} setTypeStatement={(n: any) => setTypeStatement(n)} setDataObj={(n: any) => setDataObj(n)} />
          }
        />
        <Route
          path="divorce"
          element={
            <Divorce
              uid={uid}
              setTypeStatement={(n: any) => setTypeStatement(n)}
              setDataObj={(n: any) => setDataObj(n)}
            />
          }
        />
        <Route
          path="death"
          element={
            <Death
              uid={uid}
              setTypeStatement={(n: any) => setTypeStatement(n)}
              setDataObj={(n: any) => setDataObj(n)}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Statement;
