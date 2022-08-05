import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListoOfCategories/index";
import { GlobalStyle } from "./GlobalStyles";


const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ListOfCategories />
    </Fragment>
  );
};

export default App;
