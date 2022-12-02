import React from "react";
import Banners from "../components/main/banners";
import { UsefulLinks } from "../components/main/usefulLinks";
import { Window } from "../componentStyled/window";

const Main = () => {
  return (
    <Window justify="normal" height="90vh" direction="column">
      <section>
        <UsefulLinks />
      </section>
      <section>
        <Banners />
      </section>
      <section>infa</section>
    </Window>
  );
};

export default Main;
