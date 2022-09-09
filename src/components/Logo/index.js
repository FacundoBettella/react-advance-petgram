import React from "react";
import ReactPetgramLogo from "../../../api/assets/petgram.svg";
import { SvgContainer } from "./styles";
import { Link } from "react-router-dom";

export const Logo = () => {

  // Link en cada navegacion genera un push en History sin re-renderizar la pagina.
  return (
    <Link to="/">
      <SvgContainer>
        <ReactPetgramLogo />
      </SvgContainer>
    </Link>
  );
};
