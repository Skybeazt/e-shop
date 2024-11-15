import { CATEGORIES_ACTION_TYPES } from "./category.types.js";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = function () {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesFailed = function (error) {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

export const fetchCategoriesSuccess = function (categoriesArray) {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};
