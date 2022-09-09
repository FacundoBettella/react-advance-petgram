import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../components/ListoOfCategories";
import ListOfPhotoCards from "../components/ListoOfPhotoCards";

const Home = () => {
  let params = useParams();

  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </Fragment>
  );
};

export default Home;
