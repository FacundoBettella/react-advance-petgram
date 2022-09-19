import React from "react";
import { userLoginMutation } from "../../container/userLoginMutation";
import UserForm from "../UserForm";

const Login = ({ _activateAuth }) => {
  const { loginMutation, data, loading, error } = userLoginMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({
      variables,
    })
      .then((res) => {
        const { login } = res?.data;
        _activateAuth(login);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <UserForm
      title="Iniciar sesion"
      onSubmit={onSubmit}
      disabled={loading}
      errorMessage={error?.message}
    />
  );
};

export default Login;
