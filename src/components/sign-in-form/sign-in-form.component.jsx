import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "./../../utils/firebase/firebase.utils.js";

import FormInput from "./../form-input/form-input.component";
import Button from "./../button/button.component.jsx";
import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = function () {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormValues);

  const onChangeHandler = function (e) {
    e.preventDefault();
    const { name, value } = e.target;
    (name === "email" || name === "password") &&
      setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogleHandler = async function () {
    try {
      await signInWithGooglePopup();
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user")
        alert("Window popup closed");
      else alert(error.message);
    }
  };

  const onSubmitHandler = async function (e) {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential")
        alert("Invalid username or password!");
    }
  };

  return (
    <div className="sign-up-container">
      <h2> Already have an account?</h2>
      <span>Sign in with your account details or google account</span>
      <form onSubmit={onSubmitHandler} onChange={onChangeHandler}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          required
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign-In</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGoogleHandler}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
