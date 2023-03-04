/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useNavigate } from "react-router-dom";

import "./LogInPage.css";
export const LogInPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signUp");
  };
  return (
    <div id="logInContainer">
      <div id="logInBox">
        <div id="logInSignUpTitleDiv">
          <p id="logInHeader">Login</p>
          <p
            onClick={() => {
              handleSignUpClick();
            }}
            id="signUpHeader"
          >
            Sign Up
          </p>
          <p id="invisibleTitle2">Hi</p>
        </div>
        <p className="credsLogIn">Email</p>
        <input id="longInput2" className="credsLogIn"></input>
        <p className="credsLogIn">Password</p>
        <input id="longInput2" className="credsLogIn"></input>
        <div id="buttonsLogIn">
          <button>Login</button>
          <button
            onClick={() => {
              handleSignUpClick();
            }}
          >
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
};
