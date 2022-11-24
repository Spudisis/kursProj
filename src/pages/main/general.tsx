import React from "react";
import Banners from "../../components/main/banners";
import { UsefulLinks } from "../../components/main/usefulLinks";
import s from "./general.module.css";
const Main = () => {
  return (
    <div className={s.wrapper}>
      <section>
        <UsefulLinks />
      </section>
      <section>
        <Banners />
      </section>
      <section>infa</section>
    </div>
  );
};

export default Main;
