import { observable, action, autorun, computed, runInAction, getAtom } from 'mobx';
import { getRates, getHistoricalRates } from '../services/backendService';
import { findCoinBase } from '../utils/utils';

class RatesStore {

    @observable todaysRate = [];
    @observable currencies = [];
    @observable baseConversionCoin = {}
    @observable targetConversionCoin = {};
    @observable sourceAmount = 1000;
    @observable timeStamp;


    @action async todaysRatesData() {
        const data = await getRates();
        for (let [key, value] of Object.entries(data.rates)) {
            if (key === "EUR" ||
                key === "GBP" ||
                key === "CAD" ||
                key === "MXN" ||
                key === "JPY" ||
                key === "ILS") {
                this.todaysRate.push({ key: key, value: value })
            }
            this.currencies.push({ key: key, value: value })
        }
        this.timeStamp = data.date;
        this.baseConversionCoin = findCoinBase(this.currencies, "USD");
        this.targetConversionCoin = findCoinBase(this.currencies, "ILS");
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
}

export const ratesStore = new RatesStore();