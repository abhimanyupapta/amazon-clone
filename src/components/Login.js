import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
          history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
  };
  return (
    <LoginStyled>
      <div className="login__form">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="img"
          ></img>
        </Link>

        <div className="login__container">
          <h1>Sign in</h1>
          <h5 className="label">E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id=""
            name=""
          ></input>
          <h5 className="label">Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            id=""
            name=""
          ></input>
          <button onClick={login} type="submit" className="login__btn">
            Sign in
          </button>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our intrest-Based Ads
            Notice.
          </p>
          <button onClick={register} className="register__btn">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.section`
  .login__form {
    align-items: center;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    width: 420px;
    gap: 40px;
    margin-left: auto;
    margin-right: auto;
    .login__logo {
      width: 100px;
      object-fit: contain;
      margin-left: auto;
      margin-right: auto;
    }
    .login__container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      border: 1px solid lightgrey;
      border-radius: 5px;
      padding: 20px;
      input {
        height: 30px;
        padding: 10px;
        border: none;
        width: 100%;
        border: 1px solid darkgrey;
        border-radius: 5px 5px 5px 5px;
      }
      .login__btn {
        background-color: #f0c14b;
        border: 1px solid;
        border-color: #a88734 #9c7e31 #846a29;
        padding: 5px;
        border-radius: 5px;
      }
      .register__btn {
        border: 1px solid;
        border-color: #a88734 #9c7e31 #846a29;
        padding: 5px;
        border-radius: 5px;
      }
    }
  }
`;

export default Login;
