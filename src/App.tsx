import React from "react";
import { Footer, Header } from "./components/index";
import { Main, Statement, Auth, Profile, Pay, ChangeInfoPerson, NotFound } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { checkData } from "./firebase/checkData";
import { useAppDispatch } from "./redux/store";
import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUid, setEmailUser, setPerson } from "./redux/slices/slice";
import { useSelector } from "react-redux";
import { Window, MainDiv } from "./componentStyled/index";

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

            <Route path="kursProj/profile/pay/:id" element={<Pay />} />
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
