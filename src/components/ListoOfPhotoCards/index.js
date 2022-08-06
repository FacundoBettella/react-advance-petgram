import React from "react";
import { PhotoCard } from "../PhotoCard";
import { data } from "../../../api/db.json";

export const ListOfPhotoCards = () => {
  return (
    <ol>
      {[1, 2, 3].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ol>
  );
};

export default ListOfPhotoCards;
