import React from "react";
import MarriageStatement from "./marriage/marriage";
import s from "./statement.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import StatementLinks from "../../components/NavLinks/statementLinks";
import Born from "./born/born";
import Divorce from "./divorce/divorce";
import { Death } from "./death/death";
const Statement = () => {
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path="" element={<StatementLinks />} />
        <Route path="marriage" element={<MarriageStatement />} />
        <Route path="bornRegistration" element={<Born />} />
        <Route path="divorce" element={<Divorce />} />
        <Route path="death" element={<Death />} />
      </Routes>
    </div>
  );
};

export default Statement;
