import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer.js";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
