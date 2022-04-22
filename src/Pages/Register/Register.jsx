import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.sass";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      username: name,
      password: password,
    };
    props.setUsers([...props.users, newUser]);
    navigate("/login");
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
        <button className="lr-btn">SIGNUP</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};
