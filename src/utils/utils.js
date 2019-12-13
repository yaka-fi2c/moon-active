export const findCoinBase = (currencies, coin) => {
    return currencies.find(el => el.key === coin);
};

export const calculateRatesByBase = (currencies, baseCoin) => {
    return currencies.map(el => Object.assign({}, el, { value: (1 / baseCoin) / (1 / el.value) }))
};