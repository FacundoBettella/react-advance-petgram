import React from "react";
import { PhotoCard } from "../PhotoCard";
import { data } from "../../../api/db.json";

export const ListOfPhotoCards = () => {
  return (
    <ol>
      {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((id) => (
        <PhotoCard key={id} id={id} />
      ))}
    </ol>
  );
};

export default ListOfPhotoCards;
