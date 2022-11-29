import { NavLink } from "react-router-dom";
import emblem from "../assets/img/emblem.png";

import { LogoPlace } from "../componentStyled/logo/logoPlace";
import { LogoDiv } from "../componentStyled/logo/logo";
import { LogoName } from "../componentStyled/logo/logoName";

function Logo() {
  return (
    <NavLink to="kursProj/">
      <LogoPlace>
        <LogoDiv>
          <img src={emblem} alt="NN" />
        </LogoDiv>
        <LogoName>
          <h1>ЗАГС Нижегородской&nbsp;области</h1>
          <h1>ЗАГС</h1>
        </LogoName>
      </LogoPlace>
    </NavLink>
  );
}

export default Logo;
