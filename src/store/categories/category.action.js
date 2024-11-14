import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils.js";

import { CATEGORIES_ACTION_TYPES } from "./category.types.js";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = function () {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesFailed = function (error) {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

const fetchCategoriesSuccess = function (categoriesArray) {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesAsync = function () {
  return async function (dispatch) {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCollectionAndDocuments();
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
