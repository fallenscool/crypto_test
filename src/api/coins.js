import axios from 'axios';

export const getCoins = () => {
  return axios.get('https://api.coingecko.com/api/v3/coins/list', {
    withCredentials: false,
  });
};
