import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";
import { fadeIn } from "../../styles/animation";

/* Utilizando NavLink en vez de Link podemos aria-current en el browser */

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fcfcfc;
  border-top: 2px solid #e0e0e0;
  bottom: 0;
  left: 1;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  height: 7vh;
  position: fixed;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;

  // El selector Link, si tiene un atributo aria-current..
  &[aria-current] {
    color: #e1306c;

    // pseudo elemento
    &:after {
      ${fadeIn({ time: "0.5s" })};
      content: ".";
      position: absolute;
      bottom: 0;
      margin-bottom: 1.2vh;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
