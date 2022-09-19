import React from 'react'
import { userLoginMutation } from '../../container/userLoginMutation';

const Login =({ _activateAuth }) => {

    const { loginMutation, data, loading, error  } = userLoginMutation();

    return (
        <UserForm
          title="Iniciar sesion"
          onSubmit={onSubmit}
          disabled={loading}
          errorMessage={error?.message}
        />
      );
}

export default Login