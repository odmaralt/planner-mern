import React from "react";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";
export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/");
  };
  return (
    <div id="signUpContainer">
      <div id="signUpBox">
        <div id="logInSignUpTitleDiv">
          <p
            onClick={() => {
              handleLogInClick();
            }}
            id="logInTitle"
          >
            Login
          </p>
          <p id="signUpTitle">Sign Up</p>
          <p id="invisibleTitle">Hi</p>
        </div>
        <div id="inputFlex">
          <div>
            <p>First Name</p>
            <input></input>
          </div>
          <div>
            <p>Last Name</p> <input></input>
          </div>
        </div>
        <p className="credsSignUp">Email</p>
        <input id="longInput" className="credsSignUp"></input>
        <p className="credsSignUp">Password</p>
        <input id="longInput" className="credsSignUp"></input>
        <button>Create new account</button>
      </div>
    </div>
  );
};
