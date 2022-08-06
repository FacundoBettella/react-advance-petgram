import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListoOfCategories/index";
import { GlobalStyle } from "./GlobalStyles";
import { ListOfPhotoCards } from "./components/ListoOfPhotoCards";


const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </Fragment>
  );
};

export default App;
