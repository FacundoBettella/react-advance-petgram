import React, { Fragment, useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Detail, Home, Favs, User, NotRegisteredUser } from "./pages";
import NavBar from "./components/NavBar";

import ContextProvider from "./ContextProvider.js";
import NotFount from "./pages/NotFount";

const App = () => {
  const { isAuth } = useContext(ContextProvider.Context);

  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />

          {/* Protected routes */}
          <Route
            exact
            path="/favs"
            element={isAuth ? <Favs /> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            path="/user"
            element={isAuth ? <User /> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={
              !isAuth ? <NotRegisteredUser /> : <Navigate replace to="/" />
            }
          />

          <Route path="*" element={<NotFount />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;

{
  /* <ContextProvider.Consumer>
       
        /* children function */
  // (value) =>
  //   value.isAuth ? (
  //   <Routes>
  //     <Route path="/favs" element={<Favs />} />
  //     <Route path="/user" element={<User />} />
  //   </Routes>
  // ) : (
  // <Routes>
  //   <Route path="/favs" element={<NotRegisteredUser />} />
  //   <Route path="/user" element={<NotRegisteredUser />} />
  // </Routes>
  //   )
  // }
  // </ContextProvider.Consumer>
}
