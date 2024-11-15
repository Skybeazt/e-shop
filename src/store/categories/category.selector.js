import { createSelector } from "reselect";

const selectCategoriesReducer = function (state) {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce(function (acc, category) {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  function (categoriesSlice) {
    return categoriesSlice.isLoading;
  }
);
