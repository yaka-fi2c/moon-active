import { observable, action, computed } from 'mobx';
import { getRates, getHistoricalRates } from '../services/backendService';
import {
    findCoinBase,
    calculateTodaysRate,
    getHistoryByPeriod,
    TODAYS_RATES_CURRENCIES,
    getRatesData
} from '../services/utils/utils';



class RatesStore {

    @observable todaysRates = [];
    @observable currencies = [];
    @observable ratesHistory = [];
    @observable baseConversionCoin = {};
    @observable targetConversionCoin = {};
    @observable sourceAmount = 1000;
    @observable period = 30;
    @observable timeStamp;
    @observable historyTab = 0;


    @action async todaysRatesData() {
        // set up all data before app is up
        const data = await getRates();
        for (let [key, value] of Object.entries(data.rates)) {
            if (TODAYS_RATES_CURRENCIES.includes(key)) {
                this.todaysRates.push({ key: key, value: value });
            }
            this.currencies.push({ key: key, value: value });
        };
        this.timeStamp = data.date;
        this.baseConversionCoin = findCoinBase(this.currencies, "USD");
        this.targetConversionCoin = findCoinBase(this.currencies, "ILS");
    }

    @action async historicalRates() {
        // get last year history and handle data
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

    @action setHistoryTabValue(value) {
        this.historyTab = value
    }

    @action isIlsIncluded() {
        if (this.baseConversionCoin.key !== "ILS" && this.targetConversionCoin.key !== "ILS") {
            let ils = findCoinBase(this.currencies, "ILS");
            if (!this.todaysRates.includes(ils)) {
                this.todaysRates.unshift(ils);
                this.todaysRates.pop();
            }
        } else {
            let updatedTodaysRates = []
            for (let rate of this.currencies) {
                if (TODAYS_RATES_CURRENCIES.includes(rate.key)) {
                    updatedTodaysRates.push({ key: rate.key, value: rate.value });
                }
            };
            this.todaysRates = updatedTodaysRates;
        }
    }

    @computed get todaysRateCalc() {
        return calculateTodaysRate(
            this.todaysRates,
            this.baseConversionCoin,
            this.currencies,
            this.targetConversionCoin
        );
    }

    @computed get calculatedAmount() {
        return this.sourceAmount * (1 / this.baseConversionCoin.value) / (1 / this.targetConversionCoin.value);
    }

    @computed get ratesHistoryValues() {
        return getHistoryByPeriod(this.period, this.ratesHistory, this.baseConversionCoin.key);
    }
}

export const ratesStore = new RatesStore();