import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./pages/main/general";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Statement from "./pages/statement/statement";
import Auth from "./pages/auth/auth";
import { Profile } from "./pages/profile/profile";
import { checkData } from "./firebase/checkData";
import { useAppDispatch } from "./redux/store";
import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUid, setEmailUser, setPerson } from "./redux/slices/slice";
import { useSelector } from "react-redux";
import { NotFound } from "./pages/NotFound/NotFound";
import { ChangeInfoPerson } from "./pages/changeInfoPerson/ChangeInfoPerson";
import { Window } from "./componentStyled/window";
import styled from "styled-components";
import { MainDiv } from "./componentStyled/mainDiv";
function App() {
  const dispatch = useAppDispatch();

  const [user, loading, error] = useAuthState(auth as any);
  const { uid } = useSelector(getUid);
  React.useEffect(() => {
    if (uid) {
      checkData(user?.uid, dispatch);
    }
  }, [uid]);

  React.useEffect(() => {
    if (user) {
      dispatch(setPerson(user?.uid));
      if (user.email) dispatch(setEmailUser(user?.email));
    }
  }, [user]);

  return (
    <Window direction="column">
      <Router>
        <Header />
        <MainDiv>
          <Routes>
            <Route path="kursProj/" element={<Main />} />
            <Route path="kursProj/statement/*" element={<Statement />} />
            <Route path="kursProj/authorization" element={<Auth />} />
            <Route path="kursProj/profile" element={<Profile />} />
            <Route path="kursProj/profile/changeInfo" element={<ChangeInfoPerson />} />
            <Route path="kursProj/*" element={<NotFound />} />
          </Routes>
        </MainDiv>
        <Footer />
      </Router>
    </Window>
  );
}

export default App;
