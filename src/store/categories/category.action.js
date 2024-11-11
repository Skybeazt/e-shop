import { CATEGORIES_ACTION_TYPES } from "./category.types.js";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = function (categoriesArray) {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
