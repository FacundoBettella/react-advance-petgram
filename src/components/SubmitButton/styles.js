import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  background: ${(props) => (props.disabled ? "grey" : "#8d00ff")};
  border-radius: 3px;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    background: ${(props) => (props.disabled ? "grey" : "#7100cc")};
  }
`;