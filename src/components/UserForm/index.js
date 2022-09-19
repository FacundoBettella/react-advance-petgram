import React, { Fragment, useEffect, useState } from "react";
import { useInputValues } from "../../hooks/useInputValues";
import { Button, ErrorMessage, Form, Input, Title } from "./style";

const UserForm = ({ title, onSubmit, disabled = false, errorMessage = "" }) => {
  const email = useInputValues("");
  const password = useInputValues("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          placeholder="Email"
          name="email"
          {...email}
        />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          name="password"
          {...password}
        />
        <Button disabled={disabled}>{disabled ? "Loading" : title}</Button>
      </Form>
      {errorMessage !== "" && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Fragment>
  );
};

export default UserForm;
