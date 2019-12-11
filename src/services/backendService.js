const RATES_END_POINT = "https://api.exchangeratesapi.io/latest?base=USD";
const HISTORICAL_RATES_ENDPOINT = "https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&symbols=ILS";

export const getRates = async () => {
    const response = await fetch(RATES_END_POINT);
    const data = await response.json();
    return data;
};

export const getHistoricalRates = async () => {
    const response = await fetch(HISTORICAL_RATES_ENDPOINT);
    const results = await response.json();
    return results;
};