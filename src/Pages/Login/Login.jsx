import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.sass";
import api from "../../login.json";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    if (api.username === name && api.password === password) {
      props.setIsLogged(true);
      return;
    } else {
      setIsValid(false);
    }
    for (let index = 0; index < props.users.length; index++) {
      if (
        props.users[index].username === name &&
        props.users[index].password === password
      ) {
        props.setIsLogged(true);
      } else {
        setIsValid(false);
      }
    }
  };

  return (
    <div className="login lr">
      <form onSubmit={submitHandler} className="lr-form">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="lr-input l-name"
          placeholder="Name"
        />
        <input
          type="password"
          className="lr-input l-password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="lr-btn">LOGIN</button>
        {!isValid ? <Link to="/register">Ro`yhatdan o'ting</Link> : ""}
      </form>
    </div>
  );
};
