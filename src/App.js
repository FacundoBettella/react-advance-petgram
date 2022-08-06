import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListoOfCategories/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListoOfPhotoCards";
import { Logo } from "./components/Logo";

const App = () => {
  return (
    <Fragment>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </Fragment>
  );
};

export default App;
