import React from "react";
import { Button } from "./styles";

const SubmitButton = ({ onClick, text }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default SubmitButton;
