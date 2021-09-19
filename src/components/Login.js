import React, { useState } from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../utils/auth";

const Form = ({ handleSubmit, handleUpdate }) => (
  <form
    className="login-form"
    method="post"
    onSubmit={(event) => {
      handleSubmit(event);
      navigate(`/portal/ticket-holders`);
    }}
  >
    <div className="login-form__content">
      <h2 className="login-form__header">Portal Login</h2>
      <label className="login-form__label">
        Username
        <input
          className="login-form__input"
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label>
      <label className="login-form__label">
        Password
        <input
          className="login-form__input"
          type="password"
          name="password"
          onChange={handleUpdate}
        />
      </label>
      <input className="login-form__submit" type="submit" value="Log In" />
    </div>
  </form>
);

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleUpdate = (event) => {
    setCredentials((state) => {
      return { ...state, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(credentials);
  };

  return (
    <div>
      {isLoggedIn() && navigate(`/portal/ticket-holders`)}
      <Form
        handleUpdate={(e) => handleUpdate(e)}
        handleSubmit={(e) => handleSubmit(e)}
      />
    </div>
  );
}
