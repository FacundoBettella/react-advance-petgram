import React from "react";
import UserForm from "../components/UserForm";
import ContextProvider from "../ContextProvider";

function NotRegisteredUser() {
  return (
    <ContextProvider.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <UserForm title="Registrarse" onSubmit={activateAuth} />
            <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
          </>
        );
      }}
    </ContextProvider.Consumer>
  );
}

export default NotRegisteredUser;
