import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./pages/main/general";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import s from "./normalize.module.css";
import Statement from "./pages/statement/statement";
import Auth from "./pages/auth/auth";

function App() {
  return (
    <div className={s.body}>
      <Router>
        <Header />
        <div className={s.main}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/statement" element={<Statement />} />
            <Route path="/authorization" element={<Auth />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
