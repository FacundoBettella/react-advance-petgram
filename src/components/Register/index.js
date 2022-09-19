import React from "react";
import { useRegisterMutation } from "../../container/useRegisterMutation";
import UserForm from "../UserForm";

export const Register = ({ _activateAuth }) => {
    const { registerMutation, data, loading, error } = useRegisterMutation();
  
    const onSubmit = ({ email, password }) => {
  
      const input = { email, password };
      const variables = { input };
      registerMutation({
        variables,
      })
        .then((res) => {
          _activateAuth();
        })
        .catch((e) => {
          console.log(e.message);
        });
    };
  
    return (
      <UserForm
        title="Registrarse"
        onSubmit={onSubmit}
        disabled={loading}
        errorMessage={error?.message}
      />
    );
  };