import { Types } from "../actions/coins";

const initialState = {
  items: [],
  loading: false,
};

export const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COINS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.UPDATE_COINS:
      return {
        ...state,
        items: action.payload.coins,
      };
    case Types.GET_COINS_SUCCESS:
      return {
        ...state,
        items: action.payload.coins,
        loading: false,
      };
    default:
      return state;
  }
};
