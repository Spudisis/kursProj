import React from "react";

import Logo from "./logo";
import menu from "../assets/img/menuButton.svg";
import NavLinks from "./NavLinks/NavLinks";
import { HeaderBlock } from "../componentStyled/header/header";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

import { MainDiv } from "../componentStyled/mainDiv";
import { ListView } from "../componentStyled/list";
import { ButtonHeader } from "../componentStyled/header/headerButton";
import { ListMenu } from "../componentStyled/header/HeaderlistMenu";
export type PopupClick = MouseEvent & {
  path: Node[];
};

export const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth as any);
  React.useEffect(() => {
    if (
      (location.pathname === "/kursProj/profile" ||
        location.pathname === "/kursProj/statement" ||
        location.pathname === "/kursProj/profile/changeInfo" ||
        location.pathname === "/kursProj/profile/pay:id") &&
      !user
    ) {
      navigation("/kursProj/authorization");
    }
    if (location.pathname === "/kursProj/authorization" && user) {
      navigation("/kursProj/profile");
    }
  }, [location]);
  const popup = React.useRef<HTMLButtonElement>(null);
  const [visible, isVisible] = React.useState(false);

  React.useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      const _event = e as PopupClick;
      if (popup.current && !_event.path.includes(popup.current)) {
        isVisible(false);
      }
    };
    const handleMouseIn = (e: MouseEvent) => {
      const _event = e as PopupClick;
      if (popup.current && _event.path.includes(popup.current)) {
        isVisible(true);
      }
    };
    document.body.addEventListener("mouseover", handleMouseIn);
    document.body.addEventListener("click", handleClickOut);
    return () => {
      document.body.removeEventListener("click", handleClickOut);
      document.body.removeEventListener("mouseover", handleMouseIn);
    };
  }, []);

  return (
    <HeaderBlock>
      <MainDiv flex>
        <Logo />
        <ButtonHeader innerRef={popup} onClick={() => isVisible(!visible)}>
          <img src={menu} alt="menu" />
        </ButtonHeader>
        {visible && (
          <ListMenu>
            <NavLinks />
          </ListMenu>
        )}
        <ListView>
          <NavLinks />
        </ListView>
      </MainDiv>
    </HeaderBlock>
  );
};
