import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils.js";

import FormInput from "./../form-input/form-input.component.jsx";
import Button from "./../button/button.component.jsx";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = function () {
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
    // const { email, password, confirmPassword } = formFields;
    if (password !== confirmPassword) {
      alert("Your password is not matching");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Cannot sign-up user, email already in used");
      else console.log("User sign-up encounter an error, please try again");
    }
  };

  return (
    <div className="sign-up-container">
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
        {/* <button type="submit">Sign Up</button> */}
      </form>
    </div>
  );
};

export default SignUpForm;
