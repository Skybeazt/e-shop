import { USER_ACTION_TYPES } from "./user.types.js";
import { createAction } from "../../utils/reducer/reducer.utils.js";

export const checkUserSession = function () {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};

export const googleSignInStart = function () {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
};

export const emailSignInStart = function (email, password) {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
};

export const signInSuccess = function (userAuth) {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, userAuth);
};

export const signInFailed = function (error) {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
};

export const signUpStart = function (email, password, displayName) {
  return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};

export const signUpSuccess = function (userAuth, additionalDetails) {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    userAuth,
    additionalDetails,
  });
};

export const signUpFailed = function (error) {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
};

export const signOutUserStart = function () {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
};

export const signOutSuccess = function () {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
};

export const signOutFailed = function (error) {
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
};
