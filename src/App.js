import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListoOfCategories/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListoOfPhotoCards";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <Fragment>
      <Logo />
      <GlobalStyle />

      {
        detailId ? (
          <PhotoCardWithQuery id={detailId} />
        ) : (
          <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </>
        )
      }

    </Fragment>
  );
};

export default App;
