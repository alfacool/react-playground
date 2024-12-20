import axios from 'axios';

export const CountryApi = {
    getCountries() {
        return axios.get(`https://restcountries.com/v3.1/all?fields=currencies`).then((response) => response.data);
    }
};
