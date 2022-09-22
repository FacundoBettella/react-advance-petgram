import React, { Fragment } from "react";
import { Article, Image, ImgWrapper } from "./style";
import { userCustomLazyLoading } from "../../hooks/userCustomLazyLoading";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
import useToggleLikeMutation from "../../container/ToggleLikeMutation";
import FavButton from "../FavButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DEFAULT_PHOTO =
  "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({
  id,
  liked = false,
  likes = 0,
  src = DEFAULT_PHOTO,
}) => {
  const { mutation, mutationLoading, mutationError } = useToggleLikeMutation();

  /* getSetLocalStorage */
  // const key = `like_photo_${id}`;
  // const [liked, setLiked] = useLocalStorage(key, false);

  /* Lazy Loading */
  const [show, element] = userCustomLazyLoading();

  /* React-Apollo-Client hace que ante un cambio actualice la cache y con ello la interfaz 
  con el nuevo valor de likes (como si un useEefect llevara por dependencia "likes") */
  const handleFavClick = () => {
    // !liked &&
    mutation({
      variables: {
        input: { id },
      },
    });
    // setLiked(!liked);
  };

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} />
            </ImgWrapper>
          </Link>
          <FavButton onClick={handleFavClick} likes={likes} liked={liked} />
        </Fragment>
      )}
    </Article>
  );
};

PhotoCard.prototypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} Value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} Value must be greater than 0`);
    }
  },
};
