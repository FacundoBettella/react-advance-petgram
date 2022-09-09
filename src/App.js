import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>

        <NavBar />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
