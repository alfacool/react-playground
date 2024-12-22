'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { RatesApi } from '@services/RatesApi';
import { CountryApi } from '@services/CountryApi';
import { AmountInput } from './components/AmountInput';
import { CodeSelector } from './components/CodeSelector';
import { ConvertButton } from './components/ConvertButton';
import { ResultField } from './components/ResultField';
import type { Currency, Country } from '@interfaces/currency';
import { receivedRates, modifyRatesData, receivedCountries, getOptRatesData } from '@/redux/slices/currencySlice';

const CurrencyConverter = () => {
    const dispatch = useAppDispatch();
    // const ratesData = useAppSelector((state) => state.currency.ratesData);
    const optRates = useAppSelector(getOptRatesData);
    const [amount, setAmount] = useState(0);
    // const countryData = useAppSelector((state) => state.currency.countryData);
    const [countryFrom, setcountryFrom] = useState<Currency | null>(null);
    const [countryTo, setcountryTo] = useState<Currency | null>(null);
    const [convert, setConvert] = useState(false);
    useEffect(() => {
        RatesApi.getExchangeRates().then((rates) => {
            let datas: Currency[] = [];
            let dataRates = rates;
            for (var key in dataRates.rates) {
                var value = dataRates.rates[key];
                let currency = { rate: value, full_name: '', name: key, symbol: '' };
                datas.push(currency);
            }
            dispatch(receivedRates(datas));
        });
    }, [dispatch]);
    useEffect(() => {
        CountryApi.getCountries().then((rates) => {
            dispatch(receivedCountries(rates));
        });
    }, [dispatch]);

    // opsi ubah nilai rates
    // useEffect(() => {
    //     countryData.forEach((currency: Country) => {
    //         let name = Object.keys(currency.currencies)[0];
    //         var index = ratesData.findIndex((element) => element.name == name);
    //         if (currency.currencies[name]) {
    //             let full_name = currency.currencies[name].name;
    //             let symbol = currency.currencies[name].symbol;
    //             if (index != -1) {
    //                 dispatch(modifyRatesData({ index, full_name, symbol }));
    //             }
    //         }
    //     });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [countryData, dispatch]);

    function logger() {
        console.log(optRates);
        console.log('from', countryFrom);
        console.log('to', countryTo);
    }
    function handleConvert() {
        setConvert(true);
    }
    return (
        <div className="grid">
            <div className="col-12 ">
                <div className="card ">
                    <h5 onClick={logger}> Currency Converter with Redux</h5>
                    <div className="formgrid grid p-fluid">
                        <AmountInput amount={amount} onChange={(e) => setAmount(e.value)} />
                        <CodeSelector label="From" val={countryFrom} opt={optRates} onChange={(e) => setcountryFrom(e.value)} />
                        <CodeSelector label="To" val={countryTo} opt={optRates} onChange={(e) => setcountryTo(e.value)} />
                    </div>
                    <div className="grid">
                        <div className="col text-right">
                            <ConvertButton onClick={handleConvert} />
                        </div>
                    </div>
                    {convert ? (
                        <div className="grid">
                            <div className="col">
                                Result : <ResultField amount={amount} from={countryFrom} to={countryTo} />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
