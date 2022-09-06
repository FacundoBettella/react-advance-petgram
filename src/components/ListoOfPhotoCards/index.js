// Dependencies
import React from "react";
import { useQuery } from "@apollo/client";

// Components
import { PhotoCard } from "../PhotoCard";
import { GET_PHOTOS } from "../../hoc/withPhotos";

// Local data base
/* import { data } from "../../../api/db.json"; */

export const ListOfPhotoCards = ({ categoryId }) => {
  /* Recibimos categoryId por props y con eso determinamos un filtro en la gql query GET_PHOTOS". */
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h2>Internal Server Error</h2>;
  }

  return (
    <ol>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id.toString()} {...photo} />
      ))}
    </ol>
  );
};

export default ListOfPhotoCards;
