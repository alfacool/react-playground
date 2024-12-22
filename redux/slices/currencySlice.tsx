import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';
import type { Currency, Country } from '@interfaces/currency';
import cloneDeep from 'lodash/cloneDeep';
export interface CurrencyState {
    amount: number;
    ratesData: Currency[];
    countryData: Country[];
    countryFrom: Currency[];
    countryTo: Currency[];
    convert: boolean;
}

const initialState: CurrencyState = {
    amount: 0,
    ratesData: [],
    countryData: [],
    countryFrom: [],
    countryTo: [],
    convert: false
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        receivedRates(state, action) {
            const rates = action.payload;
            state.ratesData = rates;
        },
        receivedCountries(state, action) {
            const rates = action.payload;
            state.countryData = rates;
        },
        modifyRatesData(state, action: PayloadAction<{ index: number; full_name: string; symbol: string }>) {
            const { index, full_name, symbol } = action.payload;
            state.ratesData[index].full_name = full_name;
            state.ratesData[index].symbol = symbol;
        }
    }
});

export const { receivedRates, receivedCountries, modifyRatesData } = currencySlice.actions;

export default currencySlice.reducer;

export const getOptRatesData = createSelector(
    (state: RootState) => state.currency.ratesData,
    (state: RootState) => state.currency.countryData,
    (ratesData, countryData) => {
        let optRates = cloneDeep(ratesData);
        countryData.forEach((currency: Country) => {
            let name = Object.keys(currency.currencies)[0];
            var index = ratesData.findIndex((element) => element.name == name);
            if (index != -1) optRates[index] = { ...ratesData[index], full_name: currency.currencies[name].name, symbol: currency.currencies[name].symbol };
        });
        return optRates;
    }
);
