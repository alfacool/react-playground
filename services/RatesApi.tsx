import axios from 'axios';

export const RatesApi = {
    getExchangeRates() {
        return axios.get(`https://open.er-api.com/v6/latest/USD`).then((response) => response.data);
    }
};
