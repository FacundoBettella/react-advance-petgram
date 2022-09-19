import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql, useQuery } from "@apollo/client";
import ListOfFavs from "../components/ListOfFavs/index.js";

const GET_USER_FAVS_PHOTOS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const FavsWithQuery = () => {

  const { data, loading, error } = useQuery(GET_USER_FAVS_PHOTOS, {
    fetchPolicy:
      "cache-and-network" /*es como un cache cleaner: ya que va a la network y a la cache para en cada peticion */,
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Internal Server Error</h2>;
  }

  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};
