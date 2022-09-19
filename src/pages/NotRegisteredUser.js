import React from "react";
import { Register } from "../components/Register";
import UserForm from "../components/UserForm";
import ContextProvider from "../ContextProvider";

function NotRegisteredUser() {
  return (
    <ContextProvider.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <Register _activateAuth={activateAuth} />
            <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
          </>
        );
      }}
    </ContextProvider.Consumer>
  );
}
export default NotRegisteredUser;
