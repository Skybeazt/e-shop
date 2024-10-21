import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils.js";

import SignUpForm from "./../../components/sign-up-form/sign-up-form.component.jsx";

const SignIn = function () {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocref = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <SignUpForm />
      <button onClick={logGoogleUser}>Sign with Google popup</button>
    </div>
  );
};

export default SignIn;
