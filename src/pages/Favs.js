import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Layout from "../components/Layout";
import { FavsWithQuery } from "../container/getUserFavs";

export default () => {
  return (
    <Fragment>
      <Layout title="Tus favoritos" />
      <FavsWithQuery />
    </Fragment>
  );
};
