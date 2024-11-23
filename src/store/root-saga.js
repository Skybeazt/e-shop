import { categoriesSaga } from "./categories/category.saga";
import { userSaga } from "./user/user.saga";

import { call, all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
