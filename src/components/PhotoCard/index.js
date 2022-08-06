import React from "react";
import { Button, Image, ImgWrapper } from "./style";
import { GoHeart } from "react-icons/go"

const DEFAULT_PHOTO = "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_PHOTO}) => {
    return(
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Image src={src} />
                </ImgWrapper>
            </a>
            <Button>
                <GoHeart size="15px"/>{likes}  likes!
            </Button>
        </article>
    )
}