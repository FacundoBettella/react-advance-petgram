import React, { useRef, useState } from "react";
import { Article, Button, Image, ImgWrapper } from "./style";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { userCustomLazyLoading } from "../utils/userCustomLazyLoading";

const DEFAULT_PHOTO =
  "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_PHOTO }) => {
  /* Lazy Loading */
  const element = useRef(null);
  const [show] = userCustomLazyLoading(element);

  const key = `like_photo_${id}`;
  // Algunos navegadores privado no permiten acceder al localStorage
  const [liked, setLiked] = useState(() => {
    try {
      const like = localStorage.getItem(key);
      return like;
    } catch (e) {
      console.log(e);
    }
  });

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="20px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
