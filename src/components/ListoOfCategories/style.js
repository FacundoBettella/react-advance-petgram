import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;

  &.customFixed {
    ${fadeIn({ time: "1s", type: "ease-in" })}
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    top: 0;
    right: 0;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    transform: scale(0.5);
    z-index: 1;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Item = styled.li`
  padding: 0 8px;
`;
