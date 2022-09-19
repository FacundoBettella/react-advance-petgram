import React, { Fragment, useContext } from "react";
import SubmitButton from "../components/SubmitButton";
import ContextProvider from "../ContextProvider";

const User = () => {
  const { removeAuth } = useContext(ContextProvider.Context);

  return (
    <Fragment>
      <SubmitButton onClick={removeAuth} text="Cerrar Sesión" />
    </Fragment>
  );
};

export default User;
