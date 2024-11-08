import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { compose, createStore, applyMiddleware } from "redux";

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
