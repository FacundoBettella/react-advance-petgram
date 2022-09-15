import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail, Home, Favs, User, NotRegisteredUser } from "./pages";
import NavBar from "./components/NavBar";

import ContextProvider from "./ContextProvider.js";

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
        <ContextProvider.Consumer>
          {
            /* children function */
            (value) =>
              value.isAuth ? (
                <Routes>
                  <Route path="/favs" element={<Favs />} />
                  <Route path="/user" element={<User />} />
                </Routes>
              ) : (
                <Routes>
                  <Route path="/favs" element={<NotRegisteredUser />} />
                  <Route path="/user" element={<NotRegisteredUser />} />
                </Routes>
              )
          }
        </ContextProvider.Consumer>

        <NavBar />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
