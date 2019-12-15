

export const findCoinBase = (currencies, coin) => {
    return currencies.find(el => el.key === coin);
};

export const calculateTodaysRate = (todaysRates, baseCoin, allCurrencies, targetCoin) => {
    const updatedTodaysRates = todaysRates.map(
        rate => {
            if (rate.key === baseCoin.key) {
                rate = findCoinBase(allCurrencies, "USD");
            }
            return Object.assign({}, rate, { value: (1 / baseCoin.value) / (1 / rate.value) })
        });

    return updatedTodaysRates;
};

export const setYears = () => {
    let currentTime = new Date();
    let month = currentTime.getMonth() + 1;
    let day = currentTime.getDate();
    let year = currentTime.getFullYear();

    let thisYear = `${year}-${month}-${day}`;
    let lastYear = `${year - 1}-${month}-${day}`;

    return { thisYear: thisYear, lastYear: lastYear };
}

export const getHistoryByPeriod = (period, arr) => {
    // arrange the date by period and sort it by dates.
    let today = new Date();
    let priorDate = new Date().setDate(today.getDate() - period);
    let data = arr.filter(el => {
        return new Date(el.x) > priorDate
    }).sort((a, b) => {
        return new Date(b.x) - new Date(a.x);
    })
    return data;
}