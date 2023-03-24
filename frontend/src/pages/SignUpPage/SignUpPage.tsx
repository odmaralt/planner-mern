import React, { useState } from "react";
import "./SignUpPage.css";
import axios from "axios";

import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import validationSchema from "./SignUpValidation";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
};

export const SignUpPage = () => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setFormValues({ ...formValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err: { errors: string }) => {
        setFormErrors({
          ...formErrors, // previous state ee hadgalj buruu baigaa input valueg display hiih bolno.
          [name]: err.errors[0],
        });
      });
  };
  const handleCreateButton = async () => {
    await axios
      .post(
        "http://localhost:9000/signUp",
        {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          password: formValues.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
        }
      })
      .catch((err) => console.log("here", err));
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
            <input onChange={handleInputChange} name="firstName"></input>{" "}
            <p className="errorsShort">{formErrors.firstName}</p>{" "}
          </div>
          <div>
            <p>Last Name</p>{" "}
            <input onChange={handleInputChange} name="lastName"></input>{" "}
            <p className="errorsShort">{formErrors.lastName}</p>{" "}
          </div>
        </div>
        <p className="credsSignUp">Email</p>
        <input
          onChange={handleInputChange}
          name="email"
          id="longInput"
          className="credsSignUp"
        ></input>{" "}
        <p className="errors">{formErrors.email}</p>{" "}
        <p className="credsSignUp">Password</p>
        <input
          id="longInput"
          type={"password"}
          className="credsSignUp"
          onChange={handleInputChange}
          name="password"
        ></input>{" "}
        <p className="errors">{formErrors.password}</p>{" "}
        <p className="credsSignUp">Confirm Password</p>
        <input
          id="longInput"
          className="credsSignUp"
          onChange={handleInputChange}
          name="confirm"
          type={"password"}
        ></input>{" "}
        <p className="errors">{formErrors.confirm}</p>{" "}
        <button onClick={handleCreateButton}>Create new account</button>
      </div>
    </div>
  );
};
