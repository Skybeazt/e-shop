export const selectCategoriesMap = function (state) {
  return state.categories.categories.reduce(function (acc, category) {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
