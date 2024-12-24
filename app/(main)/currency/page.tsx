'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { RatesApi } from '@services/RatesApi';
import { CountryApi } from '@services/CountryApi';
import { AmountInput } from './components/AmountInput';
import { CodeSelector } from './components/CodeSelector';
import { ConvertButton } from './components/ConvertButton';
import { ResultField } from './components/ResultField';
import { RatesTable } from './components/RatesTable';
import type { Currency, Country } from '@interfaces/currency';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [ratesData, setRatesData] = useState<Currency[]>([]);
    const [countryData, setCountryData] = useState([]);
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
            setRatesData(datas);
        });
    }, []);
    useEffect(() => {
        CountryApi.getCountries().then((rates) => {
            setCountryData(rates);
        });
    }, []);

    useEffect(() => {
        countryData.forEach((currency: Country) => {
            let name = Object.keys(currency.currencies)[0];
            var index = ratesData.findIndex((element) => element.name == name);
            if (index != -1) ratesData[index] = { ...ratesData[index], full_name: currency.currencies[name].name, symbol: currency.currencies[name].symbol };
        });
    }, [countryData, ratesData]);

    function logger() {
        console.log(ratesData);
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
                    <h5 onClick={logger}> Currency Converter</h5>
                    <div className="formgrid grid p-fluid">
                        <AmountInput amount={amount} onChange={(e) => setAmount(e.value)} />
                        <CodeSelector label="From" val={countryFrom} opt={ratesData} onChange={(e) => setcountryFrom(e.value)} />
                        <CodeSelector label="To" val={countryTo} opt={ratesData} onChange={(e) => setcountryTo(e.value)} />
                    </div>
                    <div className="grid">
                        <div className="col text-right">
                            <ConvertButton onClick={handleConvert} />
                        </div>
                    </div>
                    {convert ? (
                        <>
                            <div className="grid">
                                <div className="col">
                                    Result : <ResultField amount={amount} from={countryFrom} to={countryTo} />
                                </div>
                            </div>
                            <div className="grid">
                                <div className="col-12">
                                    <h5> Result in Other Currencies</h5>
                                </div>
                                <div className="col-12">
                                    <RatesTable amount={amount} rates={ratesData} from={countryFrom}></RatesTable>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
