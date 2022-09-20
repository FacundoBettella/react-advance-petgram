import React, { Fragment, lazy, Suspense, useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotRegisteredUser } from "./pages";
import NavBar from "./components/NavBar";

import ContextProvider from "./ContextProvider.js";
import NotFount from "./pages/NotFount";

/* Lanza error al hacer destructoring con un import dinamico */
const Home = lazy(() => import("./pages/Home"));
const Favs = lazy(() => import("./pages/Favs"));
const Detail = lazy(() => import("./pages/Detail"));
const User = lazy(() => import("./pages/User"));

const App = () => {
  const { isAuth } = useContext(ContextProvider.Context);

  return (
    <Fragment>
      <Suspense fallback={<pre>Loading...</pre>}>
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
      </Suspense>
    </Fragment>
  );
};

export default App;
