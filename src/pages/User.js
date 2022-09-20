import React, { Fragment, useContext } from "react";
import Layout from "../components/Layout";
import SubmitButton from "../components/SubmitButton";
import ContextProvider from "../ContextProvider";

export default () => {
  const { removeAuth } = useContext(ContextProvider.Context);

  return (
    <Fragment>
      <Layout title="Configuración de usuario" />
      <SubmitButton onClick={removeAuth} text="Cerrar Sesión" />
    </Fragment>
  );
};
