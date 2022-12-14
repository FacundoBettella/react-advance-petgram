import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
    margin: 1%;
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 31.33%;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);

    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`
export const Grid = styled.div`
    padding-top: 32px;
`
export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    position: absolute;
`