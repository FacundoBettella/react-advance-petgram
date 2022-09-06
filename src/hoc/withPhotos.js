/*Un componente de orden superior es una función que recibe un componente y devuelve un nuevo componente. */
import { gql } from "@apollo/client";

/* Hacemos las query como se utiliza en gql playground */
export const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

