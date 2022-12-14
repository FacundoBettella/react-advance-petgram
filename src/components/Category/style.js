import styled from "styled-components";

const Anchor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 75px;
`

const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    border-radius:  50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;   /*Para que la imagen no se estire y se adapte */
    height: 75px;
    width: 75px;
`

export {
    Anchor,
    Image
}