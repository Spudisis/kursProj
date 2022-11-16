import React from "react";
import { UsefulLinks } from "../../components/main/usefulLinks";
import s from "./general.module.css";
const Main = () => {
  return (
    <div className={s.wrapper}>
      <section>
        <UsefulLinks />
      </section>
      <section>infa</section>
      <section>infa</section>
    </div>
  );
};

export default Main;
