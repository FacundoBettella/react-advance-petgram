import React from "react";
import { Nav } from "./style";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { Link } from "react-router-dom";
function NavBar() {

    const SIZE = "32px"

  return (
    <Nav>
        <Link to="/"><MdHome size={SIZE} color="#E1306C"/></Link>
        <Link to="/favs"><MdFavoriteBorder size={SIZE} color="#E1306C"/></Link>
        <Link to="user"><MdPersonOutline size={SIZE} color="#E1306C"/></Link>
    </Nav>
  );
}

export default NavBar;
