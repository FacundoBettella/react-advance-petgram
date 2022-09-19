import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 16px;

  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
`;

export const Input = styled.input`
  border: 2px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  width: 100%;
  transition: 0.4s;

  &:focus,
  :hover {
    outline: none;
    border: 2px solid #e1306c;
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

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
    background: ${(props) => (props.disabled ? "grey" : "#fff")};
    color: ${(props) => (props.disabled ? "grey" : "#8d00ff")};
    border: ${(props) => (props.disabled ? "grey" : "2px solid #8d00ff")};
  }

  &:active {
    background: #7100cc;
    color: #fff;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  margin: 5px auto;
  font-weight: 700;
  color: #ff3333;
`;
