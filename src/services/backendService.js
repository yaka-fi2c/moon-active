import { setYears } from "./utils/utils";
const RATES_END_POINT = "https://api.exchangeratesapi.io/latest?base=USD";
const HISTORICAL_RATES_ENDPOINT = "https://api.exchangeratesapi.io/history?start_at=";


export const getRates = async () => {
    const response = await fetch(RATES_END_POINT);
    const data = await response.json();
    return data;
};

export const getHistoricalRates = async (base, target) => {
    const year = setYears();
    const response = await fetch(`${HISTORICAL_RATES_ENDPOINT}${year.lastYear}&end_at=${year.thisYear}&symbols=${target}&base=${base}`);
    const results = await response.json();
    return results;
};