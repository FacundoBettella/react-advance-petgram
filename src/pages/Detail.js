import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

function Detail() {
  let params = useParams();

  return (
    <Fragment>
      <Layout title="Detalle" />
      <PhotoCardWithQuery id={params.id} />
    </Fragment>
  );
}

export default Detail;
