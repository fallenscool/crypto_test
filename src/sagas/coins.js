import { put, call, takeEvery, fork } from "redux-saga/effects";
import * as actions from "../actions/coins";
import * as api from "../api/coins";

function* getCoins() {
  try {
    const result = yield call(api.getCoins);
    yield put(actions.getCoinsSuccess(result.data));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetCoinsRequest() {
  yield takeEvery(actions.Types.GET_COINS_REQUEST, getCoins);
}

const coinsSagas = [fork(watchGetCoinsRequest)];

export default coinsSagas;
