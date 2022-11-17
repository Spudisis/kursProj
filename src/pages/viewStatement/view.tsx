import React from "react";
import { BornView } from "../../components/viewStatement/born";
import { DeathView } from "../../components/viewStatement/death";
import Divorce from "../../components/viewStatement/divorce";
import { MarriageView } from "../../components/viewStatement/Marriage";

export const View = ({ type, statement }: any) => {
  return (
    <div>
      {type === "Регистрация брака" ? (
        <MarriageView statement={statement} />
      ) : type === "Расторжение брака" ? (
        <Divorce statement={statement} />
      ) : type === "Регистрация смерти" ? (
        <DeathView statement={statement} />
      ) : (
        <BornView statement={statement} />
      )}
    </div>
  );
};
