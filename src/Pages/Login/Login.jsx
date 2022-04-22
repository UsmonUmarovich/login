import React, { useState } from "react";
import "./Login.sass";
import api from "../../login.json";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (api.username === name && api.password === password) {
      // alert("true");
      props.setIsLogged(true);
    } else {
      alert("false");
    }
  };

  return (
    <div className="login l">
      <form onSubmit={submitHandler} className="l-form">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="l-input l-name"
          placeholder="Name"
        />
        <input
          type="password"
          className="l-input l-password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="l-btn">LOGIN</button>
      </form>
    </div>
  );
};
