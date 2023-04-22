import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "./LogInPage.css";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const LogInPage = () => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const setCookie = (name: string, value: string) => {
    const current = new Date();
    const expirationDate = new Date(current.getTime() + 86400000);
    return Cookies.set(name, `${value}`, {
      path: "/",
      expires: expirationDate,
    });
  };
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setFormValues({ ...formValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err: { errors: string[] }) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const handleSubmitButton = async () => {
    if (formValues.email === "" || formValues.password === "") {
      console.log("here");
    } else {
      await axios
        .post(
          "http://localhost:9000/login",
          {
            email: formValues.email,
            password: formValues.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const {
            data: { token },
          } = response.data;
          console.log(response.data.data.user);
          setCookie("userToken", token);
          setCookie("userId", response.data.data.user._id);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("Email or password is incorrect!");
        });
    }
  };
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
        <input
          id="longInput2"
          className="credsLogIn"
          name="email"
          onChange={handleInputChange}
        ></input>{" "}
        <p className="errors">{formErrors.email}</p>{" "}
        <p className="credsLogIn">Password</p>
        <input
          type={"password"}
          id="longInput2"
          className="credsLogIn"
          name="password"
          onChange={handleInputChange}
        ></input>{" "}
        <p className="errors">{formErrors.password}</p>{" "}
        {errorMessage.length > 0 && <p className="errors"> {errorMessage} </p>}
        <div id="buttonsLogIn">
          <button onClick={handleSubmitButton}>Login</button>
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
