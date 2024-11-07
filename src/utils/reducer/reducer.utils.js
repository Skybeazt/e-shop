export const createAction = function (type, payload) {
  return payload ? { type, payload } : { type };
};
