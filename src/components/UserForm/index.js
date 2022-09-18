import React, { Fragment, useEffect, useState } from "react";
import { useInputValues } from "../../hooks/useInputValues";
import { Button, Form, Input, Title } from "./style";

const UserForm = ({ title, onSubmit, activateAuth }) => {
  const [submitResponse, setSubmitresponse] = useState("");
  const email = useInputValues("");
  const password = useInputValues("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitresponse(
      onSubmit({ email: email.value, password: password.value }, activateAuth)
    );
  };

  useEffect(() => {}, [submitResponse]);

  /*  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleInputValues = (e) => {
    let name = e.target.name;
    setInputValues({
      ...inputValues,
      [name]: e.target.value,
    });
  }; */

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          name="email"
          {...email}
          // value={inputValues.email}
          // onChange={(e) => handleInputValues(e)}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          {...password}
          // value={inputValues.password}
          // onChange={(e) => handleInputValues(e)}
        />
        <Button>{title}</Button>
      </Form>
      {submitResponse !== "" && <p>{submitResponse}</p>}
    </Fragment>
  );
};

export default UserForm;
