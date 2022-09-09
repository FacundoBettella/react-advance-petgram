import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  /*Que el svg en el interior del button tenga: */
  & svg {
    margin-right: 4px;
  }

  &:hover {
    color: #405de6;
  }
`;