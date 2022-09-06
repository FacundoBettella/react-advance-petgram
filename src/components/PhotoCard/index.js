import React from "react";
import { Article, Button, Image, ImgWrapper } from "./style";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { userCustomLazyLoading } from "../../hooks/userCustomLazyLoading";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const DEFAULT_PHOTO =
  "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_PHOTO }) => {
  /* getSetLocalStorage */
  const key = `like_photo_${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  
  /* Lazy Loading */
  const [show, element] = userCustomLazyLoading();

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="20px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
