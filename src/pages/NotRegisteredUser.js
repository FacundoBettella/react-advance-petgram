import React, { Fragment, useContext } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import ContextProvider from "../ContextProvider";

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(
    ContextProvider.Context
  ); /* Con el hook podemos eliminar el ContextProvider.Consumer Wrap */

  return (
    // <ContextProvider.Consumer>
    //   {({ activateAuth }) => {
    // return (
    <Fragment>
      <Register _activateAuth={activateAuth} />
      <Login _activateAuth={activateAuth} />
    </Fragment>
    // );
    // }}
    // </ContextProvider.Consumer>
  );
};
export default NotRegisteredUser;
