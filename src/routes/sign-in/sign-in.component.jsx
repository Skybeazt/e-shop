import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils.js";

const SignIn = function () {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocref = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser}>Sign with google</button>
    </div>
  );
};

export default SignIn;
