import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils.js";

import { signUpStart } from "./../../store/user/user.action.js";
import { useDispatch } from "react-redux";

import FormInput from "./../form-input/form-input.component.jsx";
import Button from "./../button/button.component.jsx";

import { SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = function () {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const inputChangeHandler = function (e) {
    e.preventDefault();
    const { name, value } = e.target;
    (name === "displayName" ||
      name === "email" ||
      name === "password" ||
      name === "confirmPassword") &&
      setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = function () {
    setFormFields(defaultFormFields);
  };

  const onSubmitHandler = async function (event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Your password is not matching");
      return;
    }

    dispatch(signUpStart(email, password, displayName));
    resetFormFields();
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler} onChange={inputChangeHandler}>
        <FormInput
          label="Full Name"
          name="displayName"
          type="text"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder=""
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placholder=""
          value={confirmPassword}
          required
        />

        <Button type="submit"> Sign-up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
