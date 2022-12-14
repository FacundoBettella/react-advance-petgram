import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Image } from "./style";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, urlPath, emoji = "?" }) => {

  return (
    <Link to={urlPath}>
      <Image src={cover} />
      <Anchor>{emoji}</Anchor>
    </Link>
  );
};
