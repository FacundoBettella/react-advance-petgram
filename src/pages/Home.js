import React, { Fragment, memo } from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../components/ListoOfCategories";
import ListOfPhotoCards from "../components/ListoOfPhotoCards";
import Layout from "../components/Layout";

const HomePage = () => {
  let params = useParams();

  return (
    <Fragment>
      <Layout title="Tu app de fotos de mascotas"/>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </Fragment>
  );
};

const Home = memo(HomePage);
export default Home;
