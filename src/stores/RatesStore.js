import { observable, action, autorun, computed, runInAction, getAtom } from 'mobx';
import { getRates, getHistoricalRates } from '../services/backendService';


class RatesStore {

    @observable todaysRate = [];
    @observable baseCoin = 'USD';
    @observable historicalRates = 'this is test historical';
    @observable sourceAmount = 1000;
    @observable currentRate = 'test current rate';

    @action setSourceAmount(updatedAmount) {
        this.sourceAmount = updatedAmount;
    }


    @action async todaysRatesData() {
        const data = await getRates();
        for (let [key, value] of Object.entries(data.rates)) {
            if (key === "EUR" ||
                key === "GBP" ||
                key === "CAD" ||
                key === "MXN" ||
                key === "JPY" ||
                key === "ILS" ) {
                    this.todaysRate.push({ key: key, value: value})
                }
        }
    }

    @computed get historicalRatesData() {
        return this.historicalRates;
    }

    addRates(rates) {
        this.todaysRate.push(rates)
    }

    addHistoricalRates(rates) {
        this.historicalRates.push(rates)
    }

}

export const ratesStore = new RatesStore();