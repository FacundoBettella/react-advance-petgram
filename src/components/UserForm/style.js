import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px 16px;
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
`

export const Input = styled.input`
  border: 2px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  width: 100%;
  transition: 0.4s;

  &:focus, :hover {
    outline: none;
    border: 2px solid #e1306c;
  }
`;

export const Button = styled.button`
    background: #8d00ff;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display: block;
    width: 100%;
    text-align: center;
    transition: 0.4s;

    &:hover {
        cursor: pointer;
        background: #fff;
        color: #8d00ff;
        border: 2px solid #8d00ff;
    }

    &:active {
        background: #7100cc;
        color: #fff;
    }
`;
