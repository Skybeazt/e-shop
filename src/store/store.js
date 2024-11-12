import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { compose, createStore, applyMiddleware } from "redux";

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middleWares = [loggerMiddleWare];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
