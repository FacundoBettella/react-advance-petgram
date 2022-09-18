import React from "react";
import UserForm from "../components/UserForm";
import { useRegisterMutation } from "../container/useRegisterMutation";
import ContextProvider from "../ContextProvider";

function NotRegisteredUser() {
  const { registerMutation, data, loading, error } = useRegisterMutation();

  const onSubmit = ({ email, password }, activateAuth) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({
      variables,
    })
      .then((res) => {
        activateAuth();
        return "Succesfully registration";
      })
      .catch((e) => {return e.message});
  };

  return (
    <ContextProvider.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <UserForm
              title="Registrarse"
              onSubmit={onSubmit}
              activateAuth={activateAuth}
            />
            <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
          </>
        );
      }}
    </ContextProvider.Consumer>
  );
}

export default NotRegisteredUser;
