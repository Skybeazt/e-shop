import { useState, useContext } from "react";

import { UserContext } from "./../../contexts/user.context.jsx";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
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

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => setFormFields(defaultFormValues);

  const onChangeHandler = function (e) {
    e.preventDefault();
    const { name, value } = e.target;
    (name === "email" || name === "password") &&
      setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogleHandler = async function () {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      setCurrentUser(user);
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
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      // Setting user to state
      setCurrentUser(user);
      // Resetting the form fields
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
