export const Types = {
  GET_COINS_REQUEST: "GET_COINS_REQUEST",
  GET_COINS_SUCCESS: "GET_COINS_SUCCESS",
  UPDATE_COINS: "UPDATE_COINS",
};

export const getCoinsRequest = () => ({
  type: Types.GET_COINS_REQUEST,
});

export const updateCoins = (coins) => ({
  type: Types.UPDATE_COINS,
  payload: { coins },
});

export const getCoinsSuccess = (coins) => ({
  type: Types.GET_COINS_SUCCESS,
  payload: { coins },
});
