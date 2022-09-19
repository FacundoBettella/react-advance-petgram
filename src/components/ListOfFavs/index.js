import React from "react";
import { PhotoCard } from "../PhotoCard";
import { Grid, Image, Link } from "./styles";

const ListOfFavs = ({ favs = [] }) => {

  return (
    <Grid>
      {favs.map((current) => (
        <Link key={current.id.toString()} to={`/detail/${current.id}`}>
          <Image src={current.src} />
        </Link>
      ))}
    </Grid>
  );
};

export default ListOfFavs;
