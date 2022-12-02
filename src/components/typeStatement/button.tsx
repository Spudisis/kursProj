import React from "react";
import { ButtonGeneral } from "../../componentStyled/button";
import { BlockButtons } from "../../componentStyled/Form/blockButtons";

type name = {
  name: string | undefined;
};

export const Button = ({ name }: name) => {
  return (
    <BlockButtons>
      <ButtonGeneral width="150px" bgc="hsl(207, 47%, 43%)" type="submit">
        {name}
      </ButtonGeneral>
    </BlockButtons>
  );
};
