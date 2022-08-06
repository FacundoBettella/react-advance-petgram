import styled from "styled-components";

export const ImgWrapper = styled.div`
    border-radius: 4px;
    display: block;
    height: 0;
    overflow: hidden;
    margin-top: 1.5em;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`
export const Image = styled.img`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const Button = styled.button`
    display: flex;
    align-content: center;
    justify-content: center;
    padding-top: 8px;
    /*Que el svg en el interior del button tenga: */
    & svg {
       margin-right: 4px;
    }

    &:hover {
        color: #405DE6;
    }
`
