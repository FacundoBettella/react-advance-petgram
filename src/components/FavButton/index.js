import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./style";

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={() => onClick()}>
      <Icon size="20px" />
      {likes} likes!
    </Button>
  );
};

export default FavButton;
