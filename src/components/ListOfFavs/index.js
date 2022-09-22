import React from "react";
import { Grid, Image, Link } from "./styles";
import PropTypes from "prop-types";

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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};

export default ListOfFavs;
