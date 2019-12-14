import { observable, action, computed } from 'mobx';
import { getRates, getHistoricalRates } from '../services/backendService';
import { findCoinBase, calculateRatesByBase, getHistoryByPeriod } from '../utils/utils';

class RatesStore {

    @observable todaysRate = [];
    @observable currencies = [];
    @observable ratesHistory = [];
    @observable baseConversionCoin = {};
    @observable targetConversionCoin = {};
    @observable sourceAmount = 1000;
    @observable period = 30;
    @observable timeStamp;


    @action async todaysRatesData() {
        const data = await getRates();
        console.log(data.rates)
        for (let [key, value] of Object.entries(data.rates)) {
            if (key === "EUR" ||
                key === "GBP" ||
                key === "CAD" ||
                key === "MXN" ||
                key === "JPY" ||
                key === "ILS") {
                this.todaysRate.push({ key: key, value: value })
            };
            this.currencies.push({ key: key, value: value })
        };
        this.timeStamp = data.date;
        this.baseConversionCoin = findCoinBase(this.currencies, "USD");
        this.targetConversionCoin = findCoinBase(this.currencies, "ILS");

        this.historicalRates();
    }

    @action async historicalRates() {
        const historyData = await getHistoricalRates(this.baseConversionCoin.key, this.targetConversionCoin.key);
        this.ratesHistory = [];
        for (let [key, value] of Object.entries(historyData.rates)) {
            this.ratesHistory.push({ x: key, y: value[this.targetConversionCoin.key] });
        }
    }

    @action setBaseCurrency(coin) {
        this.baseConversionCoin = findCoinBase(this.currencies, coin);
    }

    @action setTargetCurrency(coin) {
        this.targetConversionCoin = findCoinBase(this.currencies, coin);
    }

    @action setSourceAmount(updatedAmount) {
        this.sourceAmount = updatedAmount;
    }

    @action setPeriod(period) {
        this.period = period;
    }

    @computed get convertCoinValues() {
        return calculateRatesByBase(this.todaysRate, this.baseConversionCoin.value);
    }

    @computed get calculatedAmount() {
        return this.sourceAmount * (1 / this.baseConversionCoin.value) / (1 / this.targetConversionCoin.value);
    }

    @computed get ratesHistoryValues() {
        return getHistoryByPeriod(this.period, this.ratesHistory, this.baseConversionCoin.key);
    }
}

export const ratesStore = new RatesStore();