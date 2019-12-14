export const findCoinBase = (currencies, coin) => {
    return currencies.find(el => el.key === coin);
};

export const calculateRatesByBase = (currencies, baseCoin) => {
    const todaysRates = currencies.map(
        el => Object.assign({}, el, { value: (1 / baseCoin) / (1 / el.value) }
        ));
    return todaysRates;
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