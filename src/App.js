import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListoOfCategories/index";
import { GlobalStyle } from "./GlobalStyles";
import { PhotoCard } from "./components/PhotoCard";


const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ListOfCategories />
      <PhotoCard />
    </Fragment>
  );
};

export default App;
