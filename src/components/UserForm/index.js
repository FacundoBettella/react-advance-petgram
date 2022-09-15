import React, { Fragment } from "react";
import { useInputValues } from "../../hooks/useInputValues";
import { Button, Form, Input, Title } from "./style";

const UserForm = ({ title, onSubmit }) => {
  const email = useInputValues("");
  const password = useInputValues("");

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
      <Form onSubmit={onSubmit}>
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
    </Fragment>
  );
};

export default UserForm;
